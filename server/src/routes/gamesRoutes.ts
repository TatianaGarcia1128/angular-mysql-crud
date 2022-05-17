import { Router } from "express";
import gamesController from "../controllers/gamesController";

class GamesRoutes {
    //Almacenar un objeto tipo router que puede ser accedido desde cualquier parte
    public router: Router = Router();

    //Para cuando instancie esta clase se ejecute el constructor, que ejecutará el método config
    constructor(){
        this.config();
    }

    //Definir mi ruta inicial
    config():void{
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/', gamesController.create);
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    }
}

//Instancia clase en una constante y exportar solo el enrutador
const gamesRoutes=new GamesRoutes();
export default gamesRoutes.router;