import express from 'express'
import router from './router/users.js';
import database from './config/databse.js'
import e from 'express';

const app = express();
app.use(express.json())

app.use('/api/v1', router)

const port = 3000

database.db
    .sync({ force: false })

    .then((_)=>{
        app.listen(port, () => {
        console.log("Servidor rodando na porta " +port)
        })
    })
    
    .catch((e)=>{
        console.log("Não foi possivel conectar com o banco"+ e)
    })



