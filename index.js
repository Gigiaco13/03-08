/* confiurações do servidor - início */
// carregar o módulo express
const express = require('express')
// excutar o módulo express
const app = express()
//definir a pasta dos arquivos ejs
app.set('views','./')
//criar uma instancia local
app.listen(3050,()=>{
    console.log("servidor local em http://localhost:3050")
})
/* configurações do servidor - fim */

/* configuração do banco de dados - início */
//importar o módulo mongoose
const mongoose = require('mongoose')
//configurar o script de conexão
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:dodge1313@fiaptecnico.hsj9v.mongodb.net/revisao')
}
//configurar o modelo para a coleção alunos
const modelo = new mongoose.Schema({
    nome:String,
    turma:String,
    disciplina:String 
})
//definir o modelo para a coleção alunos
const alunos = mongoose.model('alunos',modelo)

/* confiuração do banco de dados - fim */

/* rota para a requisição / */
app.get('/',async(req,res)=>{
    conexao()
    //pesquisar os documentos na collection alunos
    const resultado = await \alunos.find()
    console.log(resultado)
    //res.send('Funcionando')
    res.render('index.ejs',{resultado})
})

