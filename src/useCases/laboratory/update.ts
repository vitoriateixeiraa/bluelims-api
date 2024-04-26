import { AppError } from '../../errors';
import { client } from '../../lib/prisma';

interface IUpdateLaboratoryUseCase {
  name: string;
  institution: string;
  id: string;
}

class UpdateLaboratoryUseCase {
  async execute({ id, name, institution }: IUpdateLaboratoryUseCase) {
    const laboratory = await client.laboratory.update({
      where: {
        id,
      },
      data: {
        name,
        institution,
      },
    });

    if (!laboratory) {
      throw new AppError('Laboratório não cadastrado');
    }

    return { laboratory };
  }
}

export { UpdateLaboratoryUseCase };
