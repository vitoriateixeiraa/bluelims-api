import { AppError } from '../../errors';
import { client } from '../../lib/prisma';

interface IUpdateInputUseCase {
  name: string;
  observations: string;
  quantity: number;
  categories: string;
  subCategories: string;
  type: string;
  status: string;
  id: string;
  laboratoryId: string;
}

class UpdateInputUseCase {
  async execute({
    name,
    categories,
    observations,
    quantity,
    status,
    subCategories,
    type,
    id,
    laboratoryId
  }: IUpdateInputUseCase) {
    const input = await client.input.update({
      where: {
        id,
      },
      data: {
        name,
        categories,
        observations,
        quantity,
        status,
        subCategories,
        type,
        laboratoryId
      },
    });

    if (!input) {
      throw new AppError('Insumo não cadastrado');
    }

    return { input };
  }
}

export { UpdateInputUseCase };
