import Client from "./api";

export const EditAccount = async (data) => {
    try {
        const res = await Client.put(`/user/edit/${data.id}`,data)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}
