import { Request, Response } from 'express';
import { GetOneInputUseCase } from '../../useCases/input/get-one';

export class GetOneInputController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getOneInputUseCase = new GetOneInputUseCase();

    const { input } = await getOneInputUseCase.execute(id);

    return response.status(200).json(input);
  }
}
