import Pessoa from "./pessoa"

export default class Funcionario extends Pessoa{
    cargo!:string;
    salario!:number;
}