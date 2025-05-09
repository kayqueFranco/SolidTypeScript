import Funcionariorepository from "../repositories/FuncionarioRepository";
import{Request, Response} from "express"
import Funcionario from "../classes/Funcionario";

export default class FuncionarioService {
    funRepository = new Funcionariorepository()


    async listarFuncionario(rq:Request, res:Response){
        try {
            const rs = await this.funRepository.Listar()
            return res.status(200).json(rs)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}