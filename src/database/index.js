import mongoose from 'mongoose';

class DataBase {
    constructor() {
        this.mongoDataBase();
    }
    mongoDataBase() {
        this.mongoDBConnection = mongoose.connect('mongodb+srv://dbUser:senha@cluster0-5eiq0.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Conexão com MongoDB realizada com sucesso!")
        }).catch((erro) => {
            console.log("Erro: Conexão com MongoDB não foi realizado com sucesso: " + erro)
        })
    }
}

export default new DataBase();
