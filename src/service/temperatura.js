import ModelTemperatura from '../model/temperatura.js'

class ServiceTemperatura {

    FindAll() {
        return ModelTemperatura.FindAll()
    }

    FindOne(index) {
        return ModelTemperatura.FindOne(index)
    }

    Create(temperatura) {
        return ModelTemperatura.Create(temperatura)
    }

    Update(index, temperatura) {
        return ModelTemperatura.Update(index, temperatura)
    }

    Delete(index) {
        return ModelTemperatura.Delete(index)
    }
}

export default new ServiceTemperatura()