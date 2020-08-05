import express from 'express';

import ClassesController from './app/controllers/ClassesController';
import ConnectionController from './app/controllers/ConnectionController';

const routes = express.Router();

// Criação de aulas
routes.post('/classes', ClassesController.store);
// Listagem de aulas
routes.get('/classes', ClassesController.index);

// Criação de conexões
routes.post('/connections', ConnectionController.store);
// Exibir conexões
routes.get('/connections', ConnectionController.index);

export default routes;