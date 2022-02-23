import {Router} from 'express'
const router = Router()
import MoviesController from './controllers/MoviesController'

router.get('/', (req, res) => {
    res.send('Tudo Ok')
})

router.post('/movie', MoviesController.create) 
router.get('/movies', MoviesController.findAll)
router.get('/movie/:id', MoviesController.findOne) 
router.put('/movie/:id', MoviesController.update) 
router.delete('/movie/:id', MoviesController.destroy) 

export default router