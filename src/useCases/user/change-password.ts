import { compare, hash } from 'bcryptjs';
import { client } from '../../lib/prisma';
import { AppError } from '../../errors';

interface IUserResquest {
  userId: string;
  password: string;
}

class ChangePasswordUserUseCase {
  async execute({ userId, password }: IUserResquest) {

    const user = await client.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new AppError('Usuário não cadastrado', 400);
    }

    const passwordMatch = await compare(password, user.password);

    if (passwordMatch) {
      throw new AppError('Digite uma senha diferente da antiga.');
    }

    const passwordHash = await hash(password, 8);

    return await client.user.update({
      where: {
        id: userId,
      },
      data: {
        password: passwordHash,
      },
    });
  }
}

export { ChangePasswordUserUseCase };
