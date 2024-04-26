import { Request, Response } from 'express';
import { UpdateLaboratoryUseCase } from '../../useCases/laboratory/update';

export class UpdateLaboratoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { name, institution } = request.body;

    const updateLaboratoryUseCase = new UpdateLaboratoryUseCase();

    const { laboratory } = await updateLaboratoryUseCase.execute({
      name,
      institution,
      id,
    });

    return response.status(200).json(laboratory);
  }
}
