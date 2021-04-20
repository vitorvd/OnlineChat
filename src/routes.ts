import { Router } from 'express';
import { SettingsConstroller } from './controllers/SettingsController';

const routes = Router();

const settingController = new SettingsConstroller();

routes.post('/settings', settingController.create);

export { routes }
