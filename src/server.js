// const app = require('./app');
import app from './app';

// app.listen(8080, () => {
//     console.log("Servidor iniciado na porta 8080");
// });

require('dotenv').config({path: '.env'});
console.log(process.env.HOST);

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

// app.listen(process.env.PORT || 8080, () => {
//     console.log("Servidor iniciado.");
// })

app.listen(port, host, () => {
    console.log("Servidor iniciado.");
})