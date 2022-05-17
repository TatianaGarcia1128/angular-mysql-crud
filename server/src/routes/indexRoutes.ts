import { Router } from "express";
import {indexController} from '../controllers/indexController';

class IndexRoutes {
    //Almacenar un objeto tipo router que puede ser accedido desde cualquier parte
    public router: Router = Router();

    //Para cuando instancie esta clase se ejecute el constructor, que ejecutará el método config
    constructor(){
        this.config();
    }

    //Definir mi ruta inicial
    config():void{
        //Separé este código colocando el get en el archivo indexController dentro de la carpeta controllers
        this.router.get('/', indexController.index);
    }
}

//Instancia clase en una constante y exportar solo el enrutador
const indexRoutes=new IndexRoutes();
export default indexRoutes.router;