import express, { Request, Response } from 'express';

import routes from './routes';
import './database';

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3000, () => {
  console.log('Server online on :3000');
});
