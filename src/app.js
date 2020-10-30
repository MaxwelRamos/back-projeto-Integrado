const express = require("express");
const routes = require("./routes");
const cors = require("cors");
// import express from 'express';
// import routes from './routes';
// import cors from 'cors';

import './database';

class App{
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use((req, res, next) => {

            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

            this.app.use(cors());
            next();
        })
    }
    routes(){
        this.app.use(routes);
    }
}

module.exports = new App().app;
// export default new App().app;
