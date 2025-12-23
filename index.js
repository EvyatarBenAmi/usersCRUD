// import express from "express";
// import fs from "fs/promises";

// const app = express();
// const port = 3002;
// app.use(express.json());

// export async function reader(){
//     try {
//         const read = await fs.readFile("./users.json","utf-8",()=>{})
//         const data = JSON.parse(read)
//         return data
//     } catch (error) {
//         console.log(error)
//     }
// }
// app.get("/users",async(req,res)=>{
//     try {
//         res.send(await reader())
//     } catch (error) {
//         console.log(`err: `,error)
//     }
// })

// app.listen(port,()=>{
//     console.log(`server running on http://localhost:${port}`)
// })