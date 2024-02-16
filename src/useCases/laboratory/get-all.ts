import { client } from "../../lib/prisma";

class GetAllLaboratoriesUseCase {
  async execute() {
    const laboratories = await client.laboratory.findMany();

    return { laboratories };
  }
}

export {GetAllLaboratoriesUseCase}