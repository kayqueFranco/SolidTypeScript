import Autor from "../classes/Autor";
import AutorRepository from "../repositories/AutorRepository";
import{Request, Response} from "express"


export default class AutorService{
    AuRepository = new AutorRepository()

    async cadastroAutor(req:Request, res:Response){
        const aut:Autor = new Autor()
        aut.nome = req.body.nome;
        aut.email = req.body.email;
        aut.cpf = req.body.cpf;
        aut.telefone = req.body.telefone;
        aut.genero_literario = req.body.genero_literario;
        aut.endereco = req.body.endereco
        try {
                const rs = await this.AuRepository.Cadastrar(aut)
                return  res.status(201).json(rs)
            
        } catch (error) {
            return res.status(500).json(error)
        }
      
    }

    async listarAutor(req:Request, res:Response){
        try {
            const rs = await this.AuRepository.Listar()
            return res.status(200).json(rs)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}