import db from '../database/db'
import Sequelize from 'sequelize'

const Movie = db.define('movies', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE
    }
})

export default Movie