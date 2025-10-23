const nomes = new Array("Buldogue", "Pug", "Rottweiler")

class ModelCachorro {

    FindAll() {
        return nomes
    }

    FindOne(index) {
        return nomes[index]
    }

    Create(nome) {
        nomes.push(nome)
    }

    Update(index, nome) {
        nomes[index] = nome
    }

    Delete(index) {
        nomes.splice(index, 1)
    }
}

export default new ModelCachorro()