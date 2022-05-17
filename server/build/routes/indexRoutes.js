"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    //Para cuando instancie esta clase se ejecute el constructor, que ejecutará el método config
    constructor() {
        //Almacenar un objeto tipo router que puede ser accedido desde cualquier parte
        this.router = (0, express_1.Router)();
        this.config();
    }
    //Definir mi ruta inicial
    config() {
        //Separé este código colocando el get en el archivo indexController dentro de la carpeta controllers
        this.router.get('/', indexController_1.indexController.index);
    }
}
//Instancia clase en una constante y exportar solo el enrutador
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
