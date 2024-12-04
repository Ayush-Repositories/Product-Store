import mongoose from 'mongoose'
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://ayushdalal291206:wQIXbygoY3TwZYee@cluster0.1ynkl.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0")
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)  //'1' means failure
    }
}
