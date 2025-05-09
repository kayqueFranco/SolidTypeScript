import { resolve } from "path";
import Funcionario from "../classes/Funcionario";
import CommandsPessoa from "../Interfaces/CommandsPessoa";
import { rejects } from "assert";
import { conexao } from "../database/Config";

export default  class Funcionariorepository implements CommandsPessoa<Funcionario>{
    PesquisarCPF(cpf: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Funcionario): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    Listar(): Promise<Funcionario[]> {
        return new Promise ((resolve,reject)=>{
            conexao.query("Select * from funcionario",(erro,result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Funcionario[])
                }
            })
        })
    }
    Apagar(id: number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Funcionario): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }

}