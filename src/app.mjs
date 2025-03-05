import express from 'express'
import { connectDB } from './config/dbConfig.mjs'
import superHeroRoutes from './routes/superHeroRoutes.mjs'

const app = express()
const PORT = process.env.PORT || 3000

// middeleware para parsear JSON

app.use(express.json())

// conexion a mongoDB
connectDB()

// configuracion de rutas

app.use('/api', superHeroRoutes)

// manejo de errores para rutas no enconteadas

app.use((req,res) => {
    res.status(404).send({ mensaje: 'ruta no encontrada'})
})

// iniciar el servidor

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
})