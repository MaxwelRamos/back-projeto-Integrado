//const app = require('./app');
import app from './app';

// app.listen(8080, () => {
//     console.log("Servidor iniciado na porta 8080");
// });

app.listen(process.env.PORT || 8080, () => {
    console.log("Servidor iniciado.");
})