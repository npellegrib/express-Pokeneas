import express from 'express'
import { sendInfoPokenea, sendPhrasePokenea } from '../controllers/PokeneaController.js'

const router = express.Router()

router.get('/', sendInfoPokenea)
router.get('/show', sendPhrasePokenea)

export default router