import CommandsPessoa from "./CommandsPessoa";

export default interface ComandsFuncionario<T> extends CommandsPessoa<T>{
    PesquisarCago(Cargo:string):Promise<T[]>;
    PesquisarSalario(salario:number):Promise<T[]>;
    
}