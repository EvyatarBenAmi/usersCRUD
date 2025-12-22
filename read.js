import fs from "fs/promises";

export async function reader(){
    try {
        const read = await fs.readFile("./users.json","utf-8",()=>{})
        const data = JSON.parse(read)
        return data
    } catch (error) {
        return `Not found`
    }
}

export async function write(data){
    try {
        fs.writeFile("./users.json", data, 'utf8',()=>{})
    } catch (error) {
        console.log (`Error:`, error)
    }
}