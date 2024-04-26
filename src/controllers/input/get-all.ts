import { Request, Response } from 'express';
import { GetAllInputsUseCase } from '../../useCases/input/get-all';

export class GetAllInputController {
  async handle(request: Request, response: Response) {
    const getAllInputsUseCase = new GetAllInputsUseCase();
    const search = request.query.search as string;
    const {userId} = request

    const { inputs } = await getAllInputsUseCase.execute({ search, userId });

    return response.status(200).json(inputs);
  }
}
