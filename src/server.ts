import path from 'path';
import App from './app';
import { AuthRoute, ImageRoute, DefaultRoute } from './routes';

require('dotenv').config(
  { silent: process.env.NODE_ENV === 'production' },
  { path: path.resolve(`${__dirname}/../.env`) }
);

const app = new App([new AuthRoute(), new ImageRoute(), new DefaultRoute()]);

app.listen();
