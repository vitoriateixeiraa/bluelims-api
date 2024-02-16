import { Request, Response } from 'express';
import { DeleteInputUseCase } from '../../useCases/input/delete';

export class DeleteInputController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteInputUseCase = new DeleteInputUseCase();

    const { message } = await deleteInputUseCase.execute(id);

    return response.status(204).json(message);
  }
}
