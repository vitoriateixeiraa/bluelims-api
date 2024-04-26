import { AppError } from '../../errors';
import { client } from '../../lib/prisma';

interface ICreateInputUseCase {
  imageUrl: string;
  name: string;
  observations?: string;
  quantity: number;
  categories: string;
  subCategories: string;
  type: string;
  status: string;
  userId: string;
  laboratoryId: string;
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
    laboratoryId,
    userId,
  }: ICreateInputUseCase) {
    let laboratory;

    if (!laboratoryId) {
      laboratory = await client.laboratory.findFirst({
        where: {
          OR: [
            {
              teachers: {
                some: {
                  id: userId,
                },
              },
            },
            {
              students: {
                some: {
                  id: userId,
                },
              },
            },
          ],
        },
        select: {
          id: true,
        },
      });
    }

    if (!laboratory && !laboratoryId) {
      throw new AppError('Laboratório não cadastrado');
    }

    const input = await client.input.create({
      data: {
        name,
        categories,
        imageUrl,
        observations: observations ?? '',
        quantity,
        status,
        subCategories,
        type,
        laboratoryId: laboratory?.id || laboratoryId,
      },
    });

    return { input };
  }
}

export { CreateInputUseCase };
