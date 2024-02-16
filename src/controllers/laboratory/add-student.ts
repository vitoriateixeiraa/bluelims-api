import { Request, Response } from 'express';
import { AddStudentUseCase } from '../../useCases/laboratory/add-student';

class AddStudentController {
  async handle(request: Request, response: Response) {
    const { accessCode } = request.body;

    const { userId } = request;

    const addStudentUseCase = new AddStudentUseCase();

    await addStudentUseCase.execute({
      accessCode,
      studentId: userId,
    });

    return response
      .status(201)
      .json({ message: 'Aluno cadastrado com sucesso' });
  }
}

export { AddStudentController };
