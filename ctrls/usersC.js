import { reader, write } from "../read.js"

export { read, selectById, createUser }

const read = async (req, res) => {
    try {
        res.send(await reader())
    } catch (error) {
        res.send(`Error`)
    }
};

const selectById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await reader()
        const userId = data.find(user => user.id === Number(id))
        userId ? res.send(userId) : res.send(`ID not found `)
    } catch (error) {
        res.send(`error: `, error)
    }
};

//    createUser יש שגיאה וצריך לעבור על 
const createUser = async (req, res) => {
    try {
        const data = await reader()
        const newName = req.body.name
        const id = data.length + 1
        const newUser = { "id": id, "name": newName }
        await write(newUser)
        const newData = await reader()
        res.send(newData)
    } catch (error) {
        res.send(error)
    }
}