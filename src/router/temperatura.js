import express from 'express'
import ControllerTemperatura from '../controller/temperatura.js'

const router = express.Router()

// api/v1
router.get('/temperaturas', ControllerTemperatura.FindAll)
router.get('/temperatura/:index', ControllerTemperatura.FindOne)
router.post('/temperatura', ControllerTemperatura.Create)
router.put('/temperatura/:index', ControllerTemperatura.Update)
router.delete('/user/:index', ControllerTemperatura.Delete)

export default router