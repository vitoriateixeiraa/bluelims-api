import { Request, Response } from 'express';
import { GetAllInputsUseCase } from '../../useCases/input/get-all';

export class GetAllInputController {
  async handle(request: Request, response: Response) {
    const getAllInputsUseCase = new GetAllInputsUseCase();

    const { inputs } = await getAllInputsUseCase.execute();

    return response.status(200).json(inputs);
  }
}
