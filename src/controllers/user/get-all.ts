import { Request, Response } from "express";
import { GetAllUsersUseCase } from "../../useCases/user/get-all";

class GetAllUsersController {
  async handle(request: Request, response: Response) {
    const getAllUsersUseCase = new GetAllUsersUseCase();
    const { users } = await getAllUsersUseCase.execute();

    return response.json(users);
  }
}

export { GetAllUsersController };
