import express from 'express';
import 'reflect-metadata';

import routes from '@shared/infra/http/routes';
import '@shared/infra/typeorm';
import '@shared/container';

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3000, () => {
  console.log('Server online on :3000');
});
