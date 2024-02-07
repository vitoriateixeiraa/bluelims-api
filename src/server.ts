import express, { NextFunction, Request, Response } from 'express';
import { routes } from "./routes";
import cors from "cors";
import "express-async-errors";
import { AppError } from './errors';

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error ${error.message}`,
    });
  }
);

server.listen(3333, () => {
  console.log("Server is running!");
});
