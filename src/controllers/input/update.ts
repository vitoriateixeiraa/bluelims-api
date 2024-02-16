import { Request, Response } from 'express';
import { UpdateInputUseCase } from '../../useCases/input/update';

export class UpdateInputController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const {
      imageUrl,
      name,
      observations,
      quantity,
      categories,
      subCategories,
      type,
      status,
    } = request.body;

    const updateInputUseCase = new UpdateInputUseCase();

    const { input } = await updateInputUseCase.execute({
      imageUrl,
      name,
      observations,
      quantity,
      categories,
      subCategories,
      type,
      status,
      id,
    });

    return response.status(200).json(input);
  }
}
