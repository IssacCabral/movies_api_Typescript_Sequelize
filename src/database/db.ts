import {Sequelize} from 'sequelize'

const user = 'postgres'
const password = 'postgres'
const dataBase = 'api_movies'

const connection = new Sequelize(dataBase, user, password, {
    host: 'localhost',
    dialect: 'postgres'
})

export default connection