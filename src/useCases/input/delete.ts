import { client } from '../../lib/prisma';

class DeleteInputUseCase {
  async execute(inputId: string) {
    await client.input.delete({
      where: { id: inputId },
    });

    return { message: 'Insumo excluído com sucesso' };
  }
}

export { DeleteInputUseCase };
