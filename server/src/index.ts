import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import {createConnection} from 'typeorm';

import userRoutes from './routes/user.routes';
import waterRoutes from './routes/water.routes';
import deviceRoutes from './routes/device.routes';

const app = express();
createConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('dev'));

// routes
app.use(userRoutes);
app.use(waterRoutes); 
app.use(deviceRoutes);

app.listen(5000);
console.log('Server on port', 5000);