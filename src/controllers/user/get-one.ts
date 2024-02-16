import { Request, Response } from 'express';
import { GetOneUserUseCase } from '../../useCases/user/get-one';


class GetOneUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getOneUserUseCase = new GetOneUserUseCase();
    const user = await getOneUserUseCase.execute(id);

    return response.json(user);
  }
}

export { GetOneUserController };