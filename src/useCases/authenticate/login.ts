import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { client } from '../../lib/prisma';
import { AppError } from '../../errors';
import { env } from '../../env';

interface IRequest {
  email: string;
  password: string;
}

class LoginUseCase {
  async execute({ email, password }: IRequest) {
    const user = await client.user.findFirst({
      where: { email },
      select: {
        id: true,
        email: true,
        imageUrl: true,
        name: true,
        role: true,
        password: true,
        teacherLaboratory: {
          select: {
            id: true,
          },
        },
        studentLaboratory: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!user) {
      throw new AppError('E-mail ou senha inválidos');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('E-mail ou senha inválidos');
    }

    // @ts-ignore
    user.password = undefined;

    const token = sign({}, env.SECRET_KEY, {
      subject: user.id,
      expiresIn: '30d',
    });

    return { user, token };
  }
}

export { LoginUseCase };
