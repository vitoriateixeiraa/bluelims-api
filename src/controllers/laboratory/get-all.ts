import { Request, Response } from 'express';
import { GetAllLaboratoriesUseCase } from '../../useCases/laboratory/get-all';

class GetAllLaboratoriesController {
  async handle(request: Request, response: Response) {
    const getAllLaboratoriesUseCase = new GetAllLaboratoriesUseCase();

    const { laboratories } = await getAllLaboratoriesUseCase.execute();

    return response.status(201).json(laboratories);
  }
}

export { GetAllLaboratoriesController };
