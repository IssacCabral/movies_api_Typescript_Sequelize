import Movie from '../model/Movie'
import {Request, Response} from 'express'

class MoviesController{
    async create(req: Request, res: Response){
        const {title, year, price} = req.body
        const movie = await Movie.create({
            title,
            year,
            price
        })
        return res.status(201).json(movie)
    } 
    async findAll(req: Request, res: Response){
        const movies = await Movie.findAll()
        return res.json(movies)
    }
    async findOne(req: Request, res: Response){
        const id = parseInt(req.params.id)
        const movie = await Movie.findOne({
            where: {
                id: id
            }
        })
        return movie ? res.status(200).json(movie) : res.sendStatus(404)
    }
    async update(req: Request, res: Response){
        const id = parseInt(req.params.id)
        const {title, year, price} = req.body
        await Movie.update({
            title,
            year,
            price
        }, {where: {
            id: id
        }})
        return res.status(204).send()
    }
    async destroy(req: Request, res: Response){
        const {id} = req.params
        await Movie.destroy({
            where: {
                id: id
            }
        })
        return res.status(204).send()
    }
}

export default new MoviesController()