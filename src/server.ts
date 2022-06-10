//imports
import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

//iniciando as constantes .env
dotenv.config();

//server
const server = express();

//template engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//arquivos estaticos na pasta public
server.use(express.static(path.join(__dirname, '../public')));

//configuração de rotas
server.use(mainRoutes);
server.use((req, res)=>{
    res.send('página não encontrada!')
});


//iniciando o server
server.listen(process.env.PORT);



