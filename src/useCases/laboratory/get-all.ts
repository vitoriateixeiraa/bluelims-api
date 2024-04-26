import { client } from '../../lib/prisma';

interface IGetAllLaboratories {
  userId: string;
  search?: string;
}

class GetAllLaboratoriesUseCase {
  async execute({ search, userId }: IGetAllLaboratories) {
    const laboratories = await client.laboratory.findMany({
      where: {
        name: { contains: search, mode: 'insensitive' },
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
        name: true,
      },
    });

    return { laboratories };
  }
}

export { GetAllLaboratoriesUseCase };
