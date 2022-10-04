import express from 'express';
import { errorHandler } from './middlewares/error.js';
import router from './routes/product.routes.js';

const app = express();
app.use(express.json());

//routes
app.use('/',router);

app.use(errorHandler);

app.listen(3000, ()=>{
    console.log(`Server Listening in port 3000`);
})