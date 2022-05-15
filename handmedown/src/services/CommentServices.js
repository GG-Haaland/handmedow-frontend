import Client from "./api";


export const GetComments = async () => {
    try {
      const res = await Client.get('/comments')
      return res.data
    } catch (error) {
      throw error
    }
  }

  export const CreateComment = async () => {
    try {
      const res = await Client.post('/comments/create')
      return res.data 
    } catch (error){
      throw error
    }
  }

export const GetPostComments = async (postid) => {
  try {
    const res=  await Client.get(`/comments/postComments/${postid}`)
    return res.data 
  } catch (error){
    throw error
  }
}