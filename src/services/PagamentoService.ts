import Pagamento from "../classes/Pagamento";
import PagamentoRepository from "../repositories/PagamentoRepository";
import { Request,Response } from "express";
export default class PagamentoService{
    
    pagRepository = new PagamentoRepository()
    async cadastroPagamento(req: Request, res: Response) {
        const pag:Pagamento = new Pagamento();

        pag.venda = req.body.id_venda;
        pag.total_pagar= req.body.total_pagar;


        try {
            const rs = await this.pagRepository.Cadastrar(pag)
            return res.status(201).json(rs)

        } catch (error) {
            return res.status(500).json(error)
        }
    
}


async listarPagamento(req: Request, res: Response) {
    try {
        const rs = await this.pagRepository.Listar()
        return res.status(200).json(rs)
    } catch (error) {
        return res.status(500).json(error)
    }
}
}