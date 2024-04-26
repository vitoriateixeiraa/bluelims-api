import { client } from '../../lib/prisma';

interface GetAllInputsRequest {
  search?: string;
  userId: string;
}

class GetAllInputsUseCase {
  async execute({ search, userId }: GetAllInputsRequest) {
    const user = await client.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        studentLaboratory: {
          select: {
            id: true,
          },
        },
        teacherLaboratory: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const studentLaboratoriesId = user.studentLaboratory.map(({ id }) => id);
    const teacherLaboratoriesId = user.teacherLaboratory.map(({ id }) => id);
    const combinedLaboratoryIds = [
      ...(studentLaboratoriesId || []),
      ...(teacherLaboratoriesId || []),
    ].filter((id) => id);

    if (combinedLaboratoryIds.length === 0) {
      throw new Error('Usuário não está associado a nenhum laboratório');
    }

    const inputs = await client.input.findMany({
      where: {
        name: { contains: search, mode: 'insensitive' },
        laboratoryId: {
          in: combinedLaboratoryIds,
        },
      },
      select: {
        id: true,
        name: true,
        laboratoryId: true,
      },
    });

    return { inputs };
  }
}

export { GetAllInputsUseCase };
