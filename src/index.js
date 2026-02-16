import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env"
});

connectDB()
.then( ()=>{
  app.listen(process.env.port|| 8000)
  console.log(`server is running at port :$
  {proces.env .port} `);
})
.catch((err)=>{
  console.log("MONGO  db connection faild !!!",err)
}
)
  
 










































// import mongoose from "mongoose";
// import{DB_NAME} from"./constants;
// ; (async()=>{
//     try {
//        await  mongoose.connect(`${process.env.MONGODB_URI}/$
//         {DB_NAME}`)
//         app.on("error",(erorr)=>{

//          console.error("ERROR:,error"   )
//          throw error

//         })
//         app.listen(process.env.port,()=>){
//             console.log(`App is listening on port $
//             {process.env.PORT});
//         })

//     }
//     catch (error){
//         console.error("ERROR:,error"   )

//         throw  err

//     }
// })()