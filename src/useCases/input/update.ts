import { AppError } from '../../errors';
import { client } from '../../lib/prisma';

interface IUpdateInputUseCase {
  imageUrl: string;
  name: string;
  observations: string;
  quantity: number;
  categories: string;
  subCategories: string;
  type: string;
  status: string;
  id: string;
}

class UpdateInputUseCase {
  async execute({
    name,
    categories,
    imageUrl,
    observations,
    quantity,
    status,
    subCategories,
    type,
    id,
  }: IUpdateInputUseCase) {
    const input = await client.input.update({
      where: {
        id,
      },
      data: {
        name,
        categories,
        imageUrl,
        observations,
        quantity,
        status,
        subCategories,
        type,
      },
    });

    if (!input) {
      throw new AppError('Insumo não cadastrado');
    }

    return { input };
  }
}

export { UpdateInputUseCase };
