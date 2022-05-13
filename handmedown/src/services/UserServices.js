import Client from "./api"

export const EditAccount = async (data) => {
    try {
        const res = await Client.post(`/user/edit/${data.id}`, data)
        console.log(res.data)
        return res.data
    } catch (err) {
        throw err
    }
}