import { jsonToArr, write } from "../read.js"

export { read, selectById, createUser, updateUser, deleteUser }

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

const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const data = await jsonToArr()
        data.forEach(user => {
            if (user.id === Number(id)) {
                user.name = req.body.name
            }
        })
        await write(data)
        res.send(await jsonToArr())
    } catch (error) {
        res.send(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const data = await jsonToArr()
        const newData = data.filter(user => user.id != id)
        await write(newData)
        res.send(await jsonToArr())
    } catch (error) {
        res.send(`Error: `, error)
    }
}