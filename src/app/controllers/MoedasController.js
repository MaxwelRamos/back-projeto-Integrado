import * as Yup from 'yup';
import MoedasEnviadas from '../models/MoedasEnviadas';

class MoedasController {
    async store(req, res) {
        const schema = Yup.object().shape({
            emailDestino: Yup.string()
                .required(),
            quantidadeMoeda: Yup.number()
                .required(),
            motivo: Yup.string()
                .required()
                // .min(15)
        });

        if (!(await schema.isValid(req.body))) {
             return res.status(401).json({
                 error: true,
                 code: 104,
                 message: "Preencha todos os dados!"
             });
        }

        var saida = req.body;
        saida.email = "maxwel@puc.com.br"
        const moedasEnviadas = await MoedasEnviadas.create(saida, (err) => {
            if (err) return res.status(401).json({
                error: true,
                code: 101,
                message: "Operação não Realizada!"
            });
            return res.status(200).json({
                error: false,
                message: "Operação Realizada com sucesso!",
                dados: moedasEnviadas
            })
        });
    }

    async somaEnviadas(req, res) {
         await MoedasEnviadas.aggregate([{
             $project: { totalMoedas: {$sum: "$quantidadeMoeda"}}
         },
         {
              $group: {_id: null, totalMoedas: { $sum: "$totalMoedas" }}
         }]
         , (err, result) => {
             if (err) return res.status(401).json({
                 error: true,
                 code: 101,
                 message: "Error: Erro ao cadastrar moedas recebidaaaaas!"
             })
             else {
                 return res.json(result)
             }
         })
    }
}
export default new MoedasController();