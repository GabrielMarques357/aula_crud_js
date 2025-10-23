import ServiceCachorro from '../service/cachorro.js'

class ControllerCachorro {

    FindAll(_, res) {
        try {

            const nomes = 

            res.status(200).send( {nomes} )
        } catch (error) {
            res.status(500).send( { error: error.message} )
        }
    }

    FindOne(req, res) {
        try {

            const index = req.params.index
            const nome = ServiceCachorro.FindOne(index)

            res.status(200).send({nome})

        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    Create(req, res) {
        try {

            const nome = req.body.nome
            
            res.status(200).send()

        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    Update(req, res) {
        try {

            const index = req.params.index 
            const nome = req.body.nome

            res.status(200).send()

        } catch (error) {
            res.status(200).send({ error: error.message })
            
        }
    }

    Delete(req, res) {
        try {
            
            const index = req.params.index
            ServiceCachorro.Delete(index)

            res.status(204).send()

        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

export default new ControllerCachorro()