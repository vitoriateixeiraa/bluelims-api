import { Request, Response } from 'express';

import { LoginUseCase } from '../../useCases/authenticate/login';

class LoginController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const loginUseCase = new LoginUseCase();

    const { token, user } = await loginUseCase.execute({ email, password });

    return response.json({ token, user });
  }
}

export { LoginController };
