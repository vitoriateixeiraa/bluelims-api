import { AppError } from '../../errors';
import { client } from '../../lib/prisma';

interface IGetOneLaboratory {
  userId: string;
  id: string;
}

class GetOneLaboratoryUseCase {
  async execute({ id, userId }: IGetOneLaboratory) {
    const user = await client.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        role: true,
      },
    });

    const isAdmin = user?.role === 'ADMIN';

    const selectAdm = {
      name: true,
      institution: true,
      accessCode: true,
    };

    const selectUser = {
      name: true,
      institution: true,
    };

    const laboratory = await client.laboratory.findFirst({
      where: {
        id,
      },
      select: isAdmin ? selectAdm : selectUser,
    });

    if (!laboratory) {
      throw new AppError('Laboratório não encontrado');
    }

    return { laboratory };
  }
}

export { GetOneLaboratoryUseCase };
