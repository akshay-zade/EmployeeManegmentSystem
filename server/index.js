import express from "express" ;
import cors from 'cors'
import { adminRouter } from "./Routes/AdminRoute.js";

const app = express();
const PORT = 5000 ;

app.use(cors());
app.use(express.json());
app.use('/auth' , adminRouter)






app.listen(PORT , ()=> {
    console.log(`Server Running Successfully On Port ${PORT}`)
})
