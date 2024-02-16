import { Request, Response } from 'express';
import { ChangePasswordUserUseCase } from '../../useCases/user/change-password';

class ChangePasswordUserController {
  async handle(request: Request, response: Response) {
    const { password } = request.body;
    const { id } = request.params;

    const changePasswordUserUseCase = new ChangePasswordUserUseCase();

    const { user } = await changePasswordUserUseCase.execute({ id, password });

    return response.status(200).json(user);
  }
}

export { ChangePasswordUserController };
