import mongoose from 'mongoose';

const MoedasEnviadas = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    emailDestino: {
        type: String,
        required: true
    },
    quantidadeMoeda: {
        type: Number,
        required: true
    },
    motivo: {
        type: String,
        required: true
    }    
},
{
    timestamps: true,
});

export default mongoose.model('moedasEnviadas', MoedasEnviadas);