import AutorRepository from "../repositories/AutorRepository";
import{Request, Response} from "express"


export default class AutorService{
    AuRepository = new AutorRepository()


    async listarAutor(req:Request, res:Response){
        try {
            const rs = await this.AuRepository.Listar()
            return res.status(200).json(rs)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}