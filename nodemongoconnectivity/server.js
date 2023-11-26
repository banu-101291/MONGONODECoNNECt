import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js'

dotenv.config();
connectDB();

const app = express();

app.use(express.json())
app.use(morgan('dev'))

app.get('/',(req,res)=> {
      res.send(
        "<h1>Welcome to Ecommerce-app</h1>"
      );
});


app.use('/api/v1/auth',authRoute)


const PORT = process.env.PORT || 8050;

app.listen(PORT,()=>{
     console.log(`server is Running on ${process.env.DEV_MODE} mode on port ${PORT}`)
})




