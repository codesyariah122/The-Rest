import { AllData, DataById, DataByPenulis } from '../models/index.js'

export const getData = (req, res) => {
	try{
		res.status(200).json({
			data: AllData()
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}
}

export const getDataById = (req, res) => {
	const id = req.params.id
	try{
		res.status(200).json({
			data: DataById(id)
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}
}

export const getDataByPenulis = (req, res) => {
	const penulis = req.params.penulis
	try{
		res.status(200).json({
			data: DataByPenulis(penulis)
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}
}