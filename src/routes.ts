import { Router } from 'express';
import { MessagesController } from './controllers/MessagesController';
import { SettingsConstroller } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';

const routes = Router();

const settingsController = new SettingsConstroller();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post('/settings', settingsController.create);

routes.post('/users', usersController.create);

routes.post('/messages', messagesController.create);
routes.get('/messages/:id', messagesController.showByUser);

export { routes }
