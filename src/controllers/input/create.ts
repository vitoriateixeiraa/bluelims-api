import { Request, Response } from 'express';
import { CreateInputUseCase } from '../../useCases/input/create';

export class CreateInputController {
  async handle(request: Request, response: Response) {
    const {
      imageUrl,
      name,
      observations,
      quantity,
      categories,
      subCategories,
      type,
      status,
      laboratoryId,
    } = request.body;

    const { userId } = request;

    const createInputUseCase = new CreateInputUseCase();

    const { input } = await createInputUseCase.execute({
      imageUrl,
      name,
      observations,
      quantity,
      categories,
      subCategories,
      type,
      status,
      userId,
      laboratoryId,
    });

    return response.status(201).json({ input });
  }
}
