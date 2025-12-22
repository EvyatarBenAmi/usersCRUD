import express from "express";
import getUser from "./route/usersR.js"

const app = express();
const port = 3000;
app.use(express.json());


app.use("/users",getUser)


app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})