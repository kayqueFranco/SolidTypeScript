import { error } from "console";
import Cliente from "../classes/Cliente";
import { conexao } from "../database/Config";
import CommandsPessoa from "../Interfaces/CommandsPessoa";


export default class ClienteRepository implements CommandsPessoa<Cliente>{
    PesquisarCPF(cpf: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Cliente): Promise<Cliente> {
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
            
            
            conexao.query("INSERT INTO cliente(nome,cpf,email,telefone,id_endereco,aniversario) values(?,?,?,?,?,?)",
            [obj.nome,
                obj.cpf,
                obj.email,
                obj.telefone,
                id_end,
                obj.aniversario],
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
    Listar(): Promise<Cliente[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from cliente",(erro,result)=>{
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