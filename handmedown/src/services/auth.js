import Client from "./api";

export const UserSignIn = async (data) => {
    try {
        const res = await Client.post('/auth/login', data)
        localStorage.setItem('token', res.data.token)
        return res.data.user
    } catch (error) {
        throw error
    }
}

export const CreateUser = async (data) => {
    try {
        const res = await Client.post(`/auth/register`, data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const CheckSession = async () => {
    try {
        const res = await Client.get('/auth/session')
    return res.data
} catch (error) {
    throw error
}
}