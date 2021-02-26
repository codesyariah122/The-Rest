import Router from 'express'
import {getAllData, getDataById, getDataByPenulis, createBooks, updatedBooks, deletedBooks} from './controller.js'

const router = Router()

router.get('/show', getAllData)
router.get('/show/id/:id', getDataById)
router.get('/show/penulis/:penulis', getDataByPenulis)
router.post('/store', createBooks)
router.put('/update/:id', updatedBooks)
router.delete('/delete/:id', deletedBooks)
export default router