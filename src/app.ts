import  Express  from "express";
import cors from "cors"
import ClienteService from "./services/ClienteService";
import FuncionarioService from "./services/FuncionarioService";
import AutorService from "./services/AutorService";


const app = Express()
app.use(Express.json())
app.use(cors())
const cli = new ClienteService()
const Fun = new FuncionarioService()
const Au = new AutorService()

app.get("/api/v1/cliente/listar",(req,res)=>{
    cli.listarClientes(req,res);
})
app.post("/api/v1/cliente/cadastro",(req,res)=>{
    cli.cadastroCliente(req,res);
})

app.get("/api/v1/funcionario/listar",(req,res)=>{
    Fun.listarFuncionario(req,res);
})

app.get("/api/v1/autor/listar",(req,res)=>{
    Au.listarAutor(req,res);
})


app.listen(5000,()=>{
    console.log(`Online em: http:/127.0.0.1:5000`)
})