const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./Database/db')
const userRouter = require('./Routes/userRoutes')
const adminRouter = require('./Routes/adminRoutes')
const cookieParser = require ('cookie-parser')
const cors = require('cors')

const port = process.env.PORT



app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})


const allowedOrigins = [
   'http://localhost:5173', // Add your local development environment
   'https://treasure-cart.vercel.app' // Add your production frontend URL
 ];
 

app.use(
   cors({
     origin: allowedOrigins,
     credentials: true,
   })
 );
 app.use('/api/users', userRouter); // Example endpoint


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(userRouter)
app.use(adminRouter)
app.use(cookieParser())




app.get('/', (req, res) => {
   res.send('Backend Working Successfully.')
})


connectToDB()