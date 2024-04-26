import { client } from '../../lib/prisma';

class DeleteLaboratoryUseCase {
  async execute(LaboratoryId: string) {
    await client.laboratory.delete({
      where: { id: LaboratoryId },
    });

    return { message: 'Laboratório excluído com sucesso' };
  }
}

export { DeleteLaboratoryUseCase };
