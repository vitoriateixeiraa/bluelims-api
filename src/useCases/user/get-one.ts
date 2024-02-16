import { AppError } from "../../errors";
import { client } from "../../lib/prisma";

class GetOneUserUseCase {
  async execute(userId: string) {
    const user = await client.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new AppError("Usuario nao encontrado");
    }

    return user;
  }
}

export { GetOneUserUseCase };
