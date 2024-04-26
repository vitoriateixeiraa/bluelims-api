import { Request, Response } from 'express';
import { ChangePasswordUserUseCase } from '../../useCases/user/change-password';

class ChangePasswordUserController {
  async handle(request: Request, response: Response) {
    const { password } = request.body;
    const { userId } = request;

    const changePasswordUserUseCase = new ChangePasswordUserUseCase();

    await changePasswordUserUseCase.execute({ userId, password });

    return response
      .status(200)
      .json({ message: 'Senha alterada com sucesso.' });
  }
}

export { ChangePasswordUserController };
