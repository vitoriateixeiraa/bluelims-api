import { Request, Response } from 'express';
import { GetOneLaboratoryUseCase } from '../../useCases/laboratory/get-one';

class GetOneLaboratoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getOneLaboratoryUseCase = new GetOneLaboratoryUseCase();
    const { laboratory } = await getOneLaboratoryUseCase.execute(id);

    return response.json(laboratory);
  }
}

export { GetOneLaboratoryController };
