import Venda from "../classes/Venda";
import { conexao } from "../database/Config";
import CommandsVenda from "../Interfaces/CommandsVenda";

export default class Vendarepository implements CommandsVenda<Venda>{
    PesquisarPorData(data: Date): Promise<Venda[]> {
        throw new Error("Method not implemented.");
    }
    PesquisarPorIntervalo(data_inicial: Date, data_final: Date): Promise<Venda[]> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Venda): Promise<Venda> {
        return new Promise((resolve,reject)=>{
            
          
            conexao.query("INSERT INTO venda(id_cliente,id_funcionario)values(?,?)",[
                obj.cliente
                ,
                obj.funcionario,],
                (erro,end:any)=>{
                
                if(erro){ 
                    return reject (erro);
                }
                else{
                    return resolve(obj)
                }
            })
        })
    }
    Listar(): Promise<Venda[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from venda",(erro,result)=>{
                if(erro){
                    return reject (erro)
                }
                else{
                    return resolve(result as Venda[])
                }
            })
        })
    }
    Apagar(id: number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Venda): Promise<Venda> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Venda> {
        throw new Error("Method not implemented.");
    }
    
}