import { ValidationErrorItemOrigin } from 'sequelize'
import User from '../model/users.js'
import jwt from 'jsonwebtoken'

const JWT_SEGREDO =  "M3uS3gr3d0"

class ServiceUser {

    FindAll() {
        return User.FindAll()
    }

    async FindOne(id) {

        if (!id) {
            throw new Error("Favor informar o ID")
        }

        // procurar usuario no banco
        const user = await User.findByPk(id)

        if (!user) {
            throw new Error(`Usuário ${id} não encontrado`)
        }

        return user
    }

     async Create(nome, email, senha, ativo) {
        if (!nome || !email || !senha) {
            throw new Error("Favor preencher todos os campos")
        }

         await User.create({
            nome, email, senha, ativo
        })
    }

    async Update(id, nome, email, senha, ativo) {

        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const user = await User.findByPk(id)

        if (!user) {
            throw new Error(`Usuário ${id} não encontrado`)
        }
        
        user.nome = nome
        user.email = email
        user.senha = senha
        user.ativo = ativo
        await user.save()
        
    }

    async Delete(id) {

        if (!id) {
            throw new Error("Favor informar o ID")
        }

        // procurar usuario no banco
        const user = await User.findByPk(id)

        if (!user) {
            throw new Error(`Usuário ${id} não encontrado`)
        }

        await user.destroy()
}

    async Login(email, senha) {
        if(!email || !senha) {
            throw new Error("Email ou senha invalidos.")
        }

        const user = await User.findOne({ where: { email } })

        if (!user || user.senha !== senha) {
            throw new Error("Email ou senha invalidos.")
        }

        return jwt.sign({ id: user.id, nome: user.nome }, JWT_SEGREDO, {expiresIn: 60 * 60})

    }

}

export default new ServiceUser()