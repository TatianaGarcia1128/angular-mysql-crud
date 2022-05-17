import mysql from 'promise-mysql';
import keys from './keys';

//Módulo para traer hilo de conexión mysql.createConnection
//Otro mòdulo para traer hilo de conexión, ideal para cuando estamos en producción
const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });

export default pool;

