import ItemVendido from "../classes/ItemVendido";
import ItemVendidoRepository from "../repositories/ItemVendendidoRepository";
import { Request, Response } from "express";


export default class itenVendidoService {
    itnRepository = new ItemVendidoRepository()
    async cadastroItemVendido(req: Request, res: Response) {
        const itn: ItemVendido = new ItemVendido();

        itn.venda = req.body.id_venda
        itn.produto = req.body.id_produto;
        itn.quantidade = req.body.quantidade;
      


        try {
            const rs = await this.itnRepository.Cadastrar(itn)
            return res.status(201).json(rs)

        } catch (error) {
            return res.status(500).json(error)
        }

    }

    async listarItemVendido(req: Request, res: Response) {
        try {
            const rs = await this.itnRepository.Listar()
            return res.status(200).json(rs)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

}