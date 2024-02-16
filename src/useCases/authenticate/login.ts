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
    });

    if (!user) {
      throw new AppError('E-mail ou senha inválidos');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('E-mail ou senha inválidos');
    }

    const token = sign({}, env.SECRET_KEY, {
      subject: user.id,
      expiresIn: '30d',
    });

    return { user, token };
  }
}

export { LoginUseCase };
