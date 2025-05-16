
import Funcionario from "../classes/Funcionario";
import CommandsPessoa from "../Interfaces/CommandsPessoa";
import { conexao } from "../database/Config";

export default  class Funcionariorepository implements CommandsPessoa<Funcionario>{
    PesquisarCPF(cpf: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Funcionario): Promise<Funcionario> {
        return new Promise((resolve,reject)=>{
            // Antes de cadastrar um cliente temos que cadastrar o enderecodesse cliente
            // e,então obtemos o id do endereço cadastrado e  alocamos em uma variável para
            //  depois inserir na tabela clientes, no campo id_endereco
           let id_end:any;
            conexao.query("INSERT INTO endereco(tipo_lougradouro,logradouro,numero,complemento,cep,bairro)values(?,?,?,?,?,?)",[obj.endereco.tipo_lougradouro,obj.endereco.logradouro,obj.endereco.numero,obj.endereco.complemento,obj.endereco.cep,obj.endereco.bairro],(erro,end:any)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                     id_end = end.insertId;
                }
            
            
            conexao.query("INSERT INTO funcionario(nome,cpf,email,telefone,id_endereco,cargo,salario) values(?,?,?,?,?,?,?)",
            [obj.nome,
                obj.cpf,
                obj.email,
                obj.telefone,
                id_end,
                obj.cargo,
                obj.salario],
            (error,result)=>{
                if(error){ 
                    return reject (error);
                }
                else{
                    return resolve(obj)
                }
            })
        })
        })
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