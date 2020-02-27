import Server from './classes/server';
import userRoutes from './routes/usuario';

const server = new Server();

//Rutas de mi aplicacion 
server.app.use( '/user', userRoutes );

//Levantar express
server.start(()=>{
    console.log(`Servidor corriendo en puerto ${server.port}`);
});