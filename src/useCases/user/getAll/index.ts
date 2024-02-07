import { client } from "../../../lib/prisma";

class GetAllUsersUseCase {
  async execute() {
    const users =  await client.user.findMany();

    console.log({users})

    return { users };
  }
}

export { GetAllUsersUseCase };
