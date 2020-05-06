async function getUsers(req:any, res:any) {
    return res.json("getAllUsers")
}

async function getUser(req:any, res:any) {
    const { id } = req.params
    return res.json(`get user ${id}`)
}

async function createUser(req:any, res:any) {
    return res.json("create new user")
}

async function updateUser(req:any, res:any) {
    return res.json("update user")
}

async function deleteUser(req:any, res:any) {
    return res.json("delete user")
}

export { getUsers, getUser, createUser, updateUser, deleteUser }