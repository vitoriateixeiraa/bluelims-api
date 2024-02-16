import { client } from '../../lib/prisma';

interface IAddStudentUseCase {
  accessCode: string;
  studentId: string;
}

class AddStudentUseCase {
  async execute({ accessCode, studentId }: IAddStudentUseCase) {
    return await client.laboratory.update({
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
    });
  }
}

export { AddStudentUseCase };
