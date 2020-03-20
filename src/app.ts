//App.ts es donde se encuentra la aplicación
import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express(); //Guardamos el objeto que la función devuelve en una constante

import indexRoutes from './routes/index';

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json()) //Middleware para poder guardar en formato json

//Routes
app.use('/api', indexRoutes);

//Carperta usada para almacenar archivos públicos
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;