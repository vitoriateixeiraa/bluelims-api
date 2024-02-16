import { Request, Response, response } from "express";
import { CreateUserUseCase } from "../../useCases/user/create";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password, role, imageUrl } = req.body;

    const createUseruseCase = new CreateUserUseCase();

    const user = await createUseruseCase.execute({
      email,
      password,
      name,
      role,
      imageUrl,
    });

    return res.json(user);
  }
}
