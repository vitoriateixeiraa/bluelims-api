import { Request, Response } from 'express';
import { DeleteInputUseCase } from '../../useCases/input/delete';
import { DeleteLaboratoryUseCase } from '../../useCases/laboratory/delete';

export class DeleteLaboratoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteLaboratoryUseCase = new DeleteLaboratoryUseCase();

    const { message } = await deleteLaboratoryUseCase.execute(id);

    return response.status(204).json(message);
  }
}
