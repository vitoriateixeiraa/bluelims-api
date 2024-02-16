import { client } from '../../lib/prisma';

class GetAllUsersUseCase {
  async execute() {
    const users = await client.user.findMany();

    return { users };
  }
}

export { GetAllUsersUseCase };
