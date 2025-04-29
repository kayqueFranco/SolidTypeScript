// Criar a classe óa (superClasse) chamada pessoa 
// Passara todos os seus dados às classes  filhas
/**
 A Classe Pessoa segue o Principio o(open/close)
 do SOLID, onde, temos a classe fechada para 
 modificações abstract(abstrato) mantém a 
 classe PEssoa, sempre abstrata, não permitido
 que ela seja materializada, ou seja, não poderá
 ser uma instância
 */
import Endereco from "./Endereco";
export  default  abstract class Pessoa{
    id!:number;
    nome!: string;
    cpf!: string;
    email!: string;
    telefone?: string;
    endereco!: Endereco;
}