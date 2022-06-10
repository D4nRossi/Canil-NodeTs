//imports
import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

//iniciando as constantes .env
dotenv.config();

//server
const server = express();

//template engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());





