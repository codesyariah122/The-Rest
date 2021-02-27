import Router from 'express'
import {getData, getDataById, getDataByPenulis, createBooks, updatedBooks, deletedBooks} from '../../controllers/index.js'

const router = Router()

router.get('/show', getData)
router.get('/show/id/:id', getDataById)
router.get('/show/penulis/:penulis', getDataByPenulis)
router.post('/store', createBooks)
router.put('/updated/:id', updatedBooks)
router.delete('/deleted/:id', deletedBooks)

export default router