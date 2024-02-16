import { NextFunction, Request, Response } from 'express';
import { client } from '../lib/prisma';
import { Role } from '@prisma/client';

export function checkUserRole(roles: Role[]) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { userId } = request;

    const user = await client.user.findUnique({
      where: { id: userId },
      select: {
        role: true,
      },
    });

    if (!user) {
      return response.status(400).json({ message: 'Usuário inexistente' });
    }

    const permissionExists = roles.includes(user?.role);

    if (!permissionExists) {
      return response
        .status(403)
        .json({ message: 'Você não tem permissão para acessar essa rota' });
    }

    return next();
  };
}
