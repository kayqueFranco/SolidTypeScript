import  Express  from "express";
import cors from "cors"
import ClienteService from "./services/ClienteService";
import FuncionarioService from "./services/FuncionarioService";
import AutorService from "./services/AutorService";
import ProdutoService from "./services/ProdutoService";
import VendaService from "./services/VendaService";
import itenVendidoService from "./services/itenVendidoService";
import PagamentoService from "./services/PagamentoService";



const app = Express()
app.use(Express.json())
app.use(cors())
const cli = new ClienteService()
const Fun = new FuncionarioService()
const Aut = new AutorService()
const Prod = new ProdutoService()
const Ven = new VendaService()
const Itn = new  itenVendidoService()
const Pag = new PagamentoService()


// #####################Cliente###################
app.get("/api/v1/cliente/listar",(req,res)=>{
    cli.listarClientes(req,res);
})
app.post("/api/v1/cliente/cadastro",(req,res)=>{
    cli.cadastroCliente(req,res);
})

// #################################################

// ##################Funcionario###################
app.get("/api/v1/funcionario/listar",(req,res)=>{
    Fun.listarFuncionarios(req,res);
})

app.post("/api/v1/funcionario/cadastro",(req,res)=>{
    Fun.cadastroFuncionario(req,res);
})
// ################################################



// ####################Autor##########################
app.get("/api/v1/autor/listar",(req,res)=>{
    Aut.listarAutor(req,res);
})

app.post("/api/v1/autor/cadastro",(req,res)=>{
    Aut.cadastroAutor(req,res)
})

// ####################################################


//###################Produto ########################


app.get("/api/v1/itensvenda/listar",(req,res)=>{
    Itn.listarItemVendido(req,res);
})

app.post("/api/v1/itensvenda/cadastro",(req,res)=>{
    Itn.cadastroItemVendido(req,res)
})


// ###################################################




// ###################### venda #########################


app.get("/api/v1/venda/listar",(req,res)=>{
    Ven.listarVenda(req,res);
})

app.post("/api/v1/venda/cadastro",(req,res)=>{
    Ven.cadastroVenda(req,res)
})


// ###################################################



// ###################### itensvenda #########################


app.get("/api/v1/itensvenda/listar",(req,res)=>{
    Ven.listarVenda(req,res);
})

app.post("/api/v1/itensvenda/cadastro",(req,res)=>{
    Ven.cadastroVenda(req,res)
})


// ###################################################




// ################## pagamento #########################


app.get("/api/v1/pagamento/listar",(req,res)=>{
    Pag.listarPagamento(req,res);
})

app.post("/api/v1/pagamento/cadastro",(req,res)=>{
    Pag.cadastroPagamento(req,res)
})


// ###################################################
app.listen(5000,()=>{
    console.log(`Online em: http:/127.0.0.1:5000`)
})