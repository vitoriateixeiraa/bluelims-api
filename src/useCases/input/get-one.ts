import { AppError } from '../../errors';
import { client } from '../../lib/prisma';

class GetOneInputUseCase {
  async execute(inputId: string) {
    const input = await client.input.findUnique({
      where: { id: inputId },
      include: {
        laboratory: true,
      },
    });

    if (!input) {
      throw new AppError('Insumo não encontrado');
    }

    return { input };
  }
}

export { GetOneInputUseCase };
