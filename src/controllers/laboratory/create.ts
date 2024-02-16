import { Request, Response } from 'express';
import { CreateLaboratoryUseCase } from '../../useCases/laboratory/create';

class CreateLaboratoryController {
  async handle(request: Request, response: Response) {
    const { name, institution } = request.body;

    const { userId } = request;

    const createLaboratoryUseCase = new CreateLaboratoryUseCase();

    const { laboratory } = await createLaboratoryUseCase.execute({
      name,
      institution,
      teacherId: userId,
    });

    return response.status(201).json(laboratory);
  }
}

export { CreateLaboratoryController };
