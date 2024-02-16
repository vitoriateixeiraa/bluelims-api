import { AppError } from '../../errors';
import { client } from '../../lib/prisma';
import { generateAccessToken } from '../../utils/generateAccessCode';

interface ICreateInputUseCase {
  imageUrl: string;
  name: string;
  observations: string;
  quantity: number;
  categories: string;
  subCategories: string;
  type: string;
  status: string;
  teacherId: string;
}

class CreateInputUseCase {
  async execute({
    name,
    categories,
    imageUrl,
    observations,
    quantity,
    status,
    subCategories,
    type,
    teacherId,
  }: ICreateInputUseCase) {
    const laboratory = await client.laboratory.findFirst({
      where: {
        teachers: {
          some: {
            id: teacherId,
          },
        },
      },
      select: {
        id: true,
      },
    });

    if (!laboratory) {
      throw new AppError('Laboratório não cadastrado');
    }

    const input = await client.input.create({
      data: {
        name,
        categories,
        imageUrl,
        observations,
        quantity,
        status,
        subCategories,
        type,
        laboratoryId: laboratory?.id,
      },
    });

    return { input };
  }
}

export { CreateInputUseCase };
