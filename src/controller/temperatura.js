import temperatura from '../service/temperatura.js'
import ServiceTemperatura from '../service/temperatura.js'

class ControllerTemperatura {

    FindAll(_, res) {
        try {
            
        const temperaturas = ServiceTemperatura.FindAll()

        res.status(200).send({temperaturas})

        } catch (error) {
            res.status(500).send({error: error.message})
        }
    }

    FindOne(req, res) {
        try {
            
            const index = req.params.index
            const temperatura = ServiceTemperatura.FindOne(index)

            res.status(200).send({temperatura})

        } catch (error) {
            res.status(500).send({error: error.message})
        }
    }

    Create(req, res) {
        try {
            
            const temperatura = req.body.temperatura
            ServiceTemperatura.Create(temperatura)

            res.status(201).send()

        } catch (error) {
            res.status(500).send({error: error.message})
        }
    }

    Update(req, res) {
        try {
            
            const index = req.params.index
            const temperatura = req.body.temperatura
            ServiceTemperatura.Update(index, temperatura)

            res.status(200).sens()

        } catch (error) {
            res.status(500).send({error: error.message})
        }
    }

    Delete(req, res) {
        try {
            
            const index = req.params.index
            ServiceTemperatura.Delete(index)

            res.status(204).send()

        } catch (error) {
            res.status(500).send({error: error.message})
        }
    }
}

export default new ControllerTemperatura()