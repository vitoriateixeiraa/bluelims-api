import 'express-async-errors'
import express from 'express';
import { routes } from './routes';
import cors from 'cors';
import { AppError } from './errors';
import { errorMiddleware } from './middlewares/error';

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

// server.get('/', (req, res) => {
//   // return res.json("ola")
//   throw new Error('ERRO LANCADO NO TRY');
// });


server.use(errorMiddleware);
server.listen(3333, () => {
  console.log('Server is running!');
});
