import { client } from '../../lib/prisma';
import { generateAccessToken } from '../../utils/generateAccessCode';

interface ICreateLaboratoryUseCase {
  name: string;
  institution: string;
  teacherId: string;
}

class CreateLaboratoryUseCase {
  async execute({ name, institution, teacherId }: ICreateLaboratoryUseCase) {
    const accessCode = generateAccessToken();

    const laboratory = await client.laboratory.create({
      data: {
        name,
        institution,
        accessCode,
        teachers: {
          connect: {
            id: teacherId
          }
        }
      },
    });

    return { laboratory };
  }
}

export { CreateLaboratoryUseCase };
