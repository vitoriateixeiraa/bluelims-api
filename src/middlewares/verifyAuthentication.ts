import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { env } from '../env';

interface Ipaylod {
  sub: string;
}

export function verifyAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ message: 'Token is missing' });
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, env.SECRET_KEY) as Ipaylod;

    request.userId = sub;

    return next();
  } catch (error) {
    return response.status(401).json({ message: 'Token invalid' });
  }
}
