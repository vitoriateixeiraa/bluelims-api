import 'express-async-errors';
import express from 'express';
import { routes } from './routes';
import cors from 'cors';
import { errorMiddleware } from './middlewares/error';

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.use(errorMiddleware);
server.listen(process.env.PORT ? Number(process.env.PORT) : 3333, () => {
  console.log('Server is running!');
});
