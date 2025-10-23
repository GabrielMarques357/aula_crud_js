import express from 'express'
import ControllerCachorro from '../controller/cachorro.js'

const router = express.Router()

// api/v1
router.get('/cachorros', ControllerCachorro.FindAll)
router.get('/cachorro/:index', ControllerCachorro.FindOne)
router.post('cachorro', ControllerCachorro.Create)
router.put('/cachorro/:index', ControllerCachorro.Update)
router.delete('/user/:index', ControllerCachorro.Delete)

export default router