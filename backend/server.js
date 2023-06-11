import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
const port = process.env.PORT||5000;
import userRoutes from './routes/userRoutes.js';
import {notFound,errorHandler} from './middleware/errorMiddlerware.js'
import connectDB from './config/db.js';
import path from 'path';
connectDB();

const app = express();
app.use(express.json());   //adds middleware
app.use(express.urlencoded({extended:true}))  //majorly used for forms
app.use(cookieParser());

app.use('/api/users',userRoutes);

if(process.env.NODE_ENV === 'production'){
    const __dirname=path.resolve();
    app.use(express.static(path.join(__dirname,'frontend/dist')));

    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'frontend','dist','index.html')))
}
else{
    app.get('/',(req,res)=>{
        res.send("server is ready")
    })

}


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