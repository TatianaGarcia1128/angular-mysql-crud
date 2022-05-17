"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class Server {
    constructor() {
        //App es igual a la inicialización de express
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        //Si existe un puerto en el sistema, tomalo; de lo contrario ejecuta el puerto 3000
        //Validando el acceso a los servidores en la nube
        //Creando una vble y su valor para usarla en el método start 'port'
        this.app.set('port', process.env.PORT || 3000);
        //Sirve para ver las peticiones realizadas desde el navegador en la terminal de VSC
        this.app.use((0, morgan_1.default)('dev'));
        //Angular puede pedir los datos al servidor
        this.app.use((0, cors_1.default)());
        //El método json lo que hace es poder aceptar formatos json desde el servidor
        this.app.use(express_1.default.json());
        //En caso de querer enviar desde un formulario html, en caso de querer extender la aplicación
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //Ejecutar el enrutador que se encuentra en indexRoutes
    routes() {
        this.app.use('/', indexRoutes_1.default);
        //Solo disponible cuando se visite la ruta en el navegador api/games
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    //Inicializar el servidor y empiece a escuchar
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port 3000', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
