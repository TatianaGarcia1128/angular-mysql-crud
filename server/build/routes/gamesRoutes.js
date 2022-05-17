"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    //Para cuando instancie esta clase se ejecute el constructor, que ejecutará el método config
    constructor() {
        //Almacenar un objeto tipo router que puede ser accedido desde cualquier parte
        this.router = (0, express_1.Router)();
        this.config();
    }
    //Definir mi ruta inicial
    config() {
        this.router.get('/', gamesController_1.default.list);
        this.router.get('/:id', gamesController_1.default.getOne);
        this.router.post('/', gamesController_1.default.create);
        this.router.put('/:id', gamesController_1.default.update);
        this.router.delete('/:id', gamesController_1.default.delete);
    }
}
//Instancia clase en una constante y exportar solo el enrutador
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
