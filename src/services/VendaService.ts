import { Request, Response } from "express";

import Venda from "../classes/Venda";
import Vendarepository from "../repositories/VendaRepository";

export default class VendaService {
    venRepository = new Vendarepository()
    async cadastroVenda(req: Request, res: Response) {
        const ven: Venda = new Venda();

        ven.cliente = req.body.id_cliente;
        ven.funcionario = req.body.id_funcionario;


        try {
            const rs = await this.venRepository.Cadastrar(ven)
            return res.status(201).json(rs)

        } catch (error) {
            return res.status(500).json(error)
        }

    }


    async listarVenda(req: Request, res: Response) {
        try {
            const rs = await this.venRepository.Listar()
            return res.status(200).json(rs)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}