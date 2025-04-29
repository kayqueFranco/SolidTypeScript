import { error } from "console";
import Cliente from "../classes/Cliente";
import { conexao } from "../database/Config";
import CommandsPessoa from "../Interfaces/CommandsPessoa";
import { resolve } from "path";
import { rejects } from "assert";

export default class ClienteRepository implements CommandsPessoa<Cliente>{
    PesquisarCPF(cpf: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Cliente): Promise<Cliente> {
        return new Promise((resolve,reject)=>{
            conexao.query("INSERT INTO cliente SET  ?",obj,(erro,result)=>{
                if(erro){ 
                    return reject (erro);
                }
                else{
                    return resolve(obj)
                }
            })
        })
    }
    Listar(): Promise<Cliente[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from Cliente",(erro,result)=>{
                if(erro){
                    return reject (erro)
                }
                else{
                    return resolve(result as Cliente[])
                }
            })
        })

    }
    Apagar(id: number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Cliente): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
   
}