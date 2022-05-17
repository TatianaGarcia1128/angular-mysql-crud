import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server {
    public app: Application;

    constructor() {
        //App es igual a la inicialización de express
        this.app = express();
        this.config();
        this.routes();
    }


    config(): void {
        //Si existe un puerto en el sistema, tomalo; de lo contrario ejecuta el puerto 3000
        //Validando el acceso a los servidores en la nube
        //Creando una vble y su valor para usarla en el método start 'port'
        this.app.set('port', process.env.PORT || 3000);
        //Sirve para ver las peticiones realizadas desde el navegador en la terminal de VSC
        this.app.use(morgan('dev'));
        //Angular puede pedir los datos al servidor
        this.app.use(cors());
        //El método json lo que hace es poder aceptar formatos json desde el servidor
        this.app.use(express.json());
        //En caso de querer enviar desde un formulario html, en caso de querer extender la aplicación
        this.app.use(express.urlencoded({extended: false}));
    }

    //Ejecutar el enrutador que se encuentra en indexRoutes
    routes(): void {
        this.app.use('/', indexRoutes);
        //Solo disponible cuando se visite la ruta en el navegador api/games
        this.app.use('/api/games', gamesRoutes);
    }

    //Inicializar el servidor y empiece a escuchar
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port 3000', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();

