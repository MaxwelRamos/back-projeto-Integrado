import { Router } from 'express';

import UserController from './app/controllers/UserController';
import MoedasController from './app/controllers/MoedasController';
const routes = new Router();

routes.get('/', (req, res) => {
    res.send("Raiz");
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/moedas', MoedasController.store);
routes.get('/somaEnviadas', MoedasController.somaEnviadas);


export default routes;
