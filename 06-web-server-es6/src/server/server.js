// const express = require('express');
import express from 'express';
// const path = require('path');
import path from 'path';

const startServer = (options) => {
    const { port, public_path = 'public' } = options;
    const app = express();

    //use(express.) para poder usar middlewares:
    app.use(express.static(public_path));//contenido estatico que ponemos disponible.

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`);
        res.sendFile(indexPath);
    });
    
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}

// module.exports = {
//     startServer
// }
export default startServer;
 //export default startServer; es lo mismo que exportar la función startServer
 //pero con el export default, puedo usar la función como un importante y sin necesidad de usar {}
 //y puedo usarlo como un método directamente en otro archivo, sin tener que exportarlo explicitamente.
 //Ej: import startServer from './startServer.js';