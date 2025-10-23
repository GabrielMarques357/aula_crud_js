import ModelCachorro from '../model/cachorro.js'

class ServiceCachorro {

    FindAll() {
        return ModelCachorro.FindAll()
    }

    FindOne(index) {
        return ModelCachorro.FindOne(index)
    }

    Create(nome) {
        return ModelCachorro.Create(nome)
    }

    Update(index, nome) {
        return ModelCachorro.Update(index, nome)
    }

    Delete(index) {
        return ModelCachorro.Delete(index)
    }
}

export default new ServiceCachorro()
