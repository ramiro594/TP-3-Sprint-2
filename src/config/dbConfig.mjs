import mongoose from 'mongoose'

export async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://Grupo-05:grupo05@cursadanodejs.ls9ii.mongodb.net/Node-js')
        console.log('conexion exitosa a mongodb')
    } catch (error) {
        console.log('error al conectar a mongodb', error)
        procces.exit(1)
    }
}