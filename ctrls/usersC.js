import { jsonToArr, write } from "../read.js"

export { read, selectById, createUser }

const read = async (req, res) => {
    try {
        res.send(await jsonToArr())
    } catch (error) {
        res.send(`Error`)
    }
};

const selectById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await jsonToArr()
        const userId = data.find(user => user.id === Number(id))
        userId ? res.send(userId) : res.send(`ID not found `)
    } catch (error) {
        res.send(`error: `, error)
    }
};

const createUser = async (req, res) => {
    try {
        const data = await jsonToArr()
        const newUser = { "id": data.length + 1, "name": req.body.name }
        data.push(newUser)
        await write(data)
        const newReadData = await jsonToArr()
        res.send(newReadData)
    } catch (error) {
        res.send(error)
    }
}