import { AppError } from '../../errors';
import { client } from '../../lib/prisma';

interface IAddStudentUseCase {
  accessCode: string;
  studentId: string;
}

class AddStudentUseCase {
  async execute({ accessCode, studentId }: IAddStudentUseCase) {
    const laboratory = await client.laboratory.findUnique({
      where: {
        accessCode,
      },
      select: {
        accessCode: true,
      },
    });

    if (laboratory?.accessCode !== accessCode) {
      throw new AppError('Código de acesso inválido.');
    }

    const studentLaboratory = await client.laboratory.update({
      where: {
        accessCode,
      },
      data: {
        students: {
          connect: {
            id: studentId,
          },
        },
      },
      select: {
        id: true,
      },
    });

    return { id: studentLaboratory.id };
  }
}

export { AddStudentUseCase };
