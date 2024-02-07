import { hash } from "bcryptjs";
import { client } from "../../../lib/prisma";

interface IUserResquest {
  id: string;
  password: string;
}

class ChangePasswordUserUseCase {
  async execute({ id, password }: IUserResquest) {
    const passwordHash = await hash(password, 8);

    const user = client.user.update({
      where: {
        id,
      },
      data: {
        password: passwordHash,
      },
    });

    return { user };
  }
}

export { ChangePasswordUserUseCase };
