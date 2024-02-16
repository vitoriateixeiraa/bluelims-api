import { AppError } from '../../errors';
import { client } from '../../lib/prisma';

class GetOneLaboratoryUseCase {
  async execute(laboratoryId: string) {
    const laboratory = await client.laboratory.findUnique({
      where: { id: laboratoryId },
    });

    if (!laboratory) {
      throw new AppError('Laboratório não encontrado');
    }

    return { laboratory };
  }
}

export { GetOneLaboratoryUseCase };
