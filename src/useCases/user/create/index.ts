import { hash } from "bcryptjs";
import { AppError } from "../../../errors";
import { client } from "../../../lib/prisma";

interface IUserResquest {
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "USER";
  imageUrl?: string;
}

class CreateUserUseCase {
  async execute({ name, email, password, role, imageUrl }: IUserResquest) {
    const userAlreadyExist = await client.user.findFirst({
      where: { email },
    });

    if (userAlreadyExist) {
      throw new AppError("Email já cadastrado");
    }

    const passwordHash = await hash(password, 8);

    const user = await client.user.create({
      data: {
        name,
        email,
        password: passwordHash,
        role,
        imageUrl,
      },
    });

    return user;
  }
}

export { CreateUserUseCase };
