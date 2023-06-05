import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT||5000;
import userRoutes from './routes/userRoutes.js';
import {notFound,errorHandler} from './middleware/errorMiddlerware.js'

const app = express();

app.use('/api/users',userRoutes);

app.get('/',(req,res)=>{
    res.send("server is ready")
})
app.use(notFound);
app.use(errorHandler);

app.listen(port,(error)=>{
    if(!error){
        console.log(`server stated in port ${port}`);
    }
    else{
        console.log(error);
    }
})