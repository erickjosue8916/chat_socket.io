async function getUsers(req:any, res:any) {
    return res.status(200).json("getAllUsers")
}

async function getUser(req:any, res:any) {
    const { id } = req.params
    return res.status(200).json({message: `get user ${id}`})
}

async function createUser(req:any, res:any) {
    return res.status(201).json("create new user")
}

async function updateUser(req:any, res:any) {
    return res.status(200).json("update user")
}

async function deleteUser(req:any, res:any) {
    return res.status(200).json("delete user")
}

export { getUsers, getUser, createUser, updateUser, deleteUser }