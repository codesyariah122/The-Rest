import Router from 'express'
import {getData, getDataById, getDataByPenulis} from '../../controllers/index.js'

const router = Router()

router.get('/', getData)
router.get('/id/:id', getDataById)
router.get('/penulis/:penulis', getDataByPenulis)

export default router