import { Request, Response } from 'express';
import { UpdateInputUseCase } from '../../useCases/input/update';

export class UpdateInputController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const {
      name,
      observations,
      quantity,
      categories,
      subCategories,
      type,
      status,
      laboratoryId,
    } = request.body;

    const updateInputUseCase = new UpdateInputUseCase();

    const { input } = await updateInputUseCase.execute({
      name,
      observations,
      quantity,
      categories,
      subCategories,
      type,
      status,
      id,
      laboratoryId,
    });

    return response.status(200).json(input);
  }
}
