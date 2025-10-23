const temperaturas = new Array("10", "45", "78")

class ModelTemperatura {

    FindAll() {
        return temperaturas
    }

    FindOne(index) {
        return temperaturas[index]
    }

    Create(temperatura) {
        temperaturas.push(temperatura)
    }

    Update(index, temperatura) {
        temperaturas[index] = temperatura
    }

    Delete(index) {
        temperaturas.splice(index, 1)
    }
}

export default new ModelTemperatura()