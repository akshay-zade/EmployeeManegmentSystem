import express from 'express';
import con from '../utils/db.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/adminlogin' , (req, res)=> {
 const sql = "SELECT * from admin Where email = ? and password = ?"
 con.query(sql , [req.body.email, req.body.password] , (err, result)=> {
   if(err) return res.json({loginStatus: false, Error: "Query error"})
   if(result.length > 0) {
    const email = result[0].email ;
    const token = jwt.sign({role:"admin"})
   }
 } )
})

export {router as adminRouter}