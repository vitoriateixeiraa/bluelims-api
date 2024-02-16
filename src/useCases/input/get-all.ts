import { client } from '../../lib/prisma';

class GetAllInputsUseCase {
  async execute() {
    const inputs = await client.input.findMany();

    return { inputs };
  }
}

export { GetAllInputsUseCase };
