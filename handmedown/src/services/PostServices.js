import Client from './api'

export const GetPost = async () => {
    try {
        const res = await Client.get('/post')
    } catch (err) {
        throw err
    }
}

export const EditPost = async (data) => {
    try {
      const res = await Client.put(`/post/${data.id}`,data)
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }
  
  export const DeletePost = async (data) => {
    try {
      const res = await Client.delete(`/post/${data.id}`)
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }
  
  export const CreatePost = async (data) => {
    try {
      const res = await Client.post('/post/createpost',data)
      return res.data 
    } catch (error){
      throw error
    }
  }
  export const AddPost = async () => {
    try {
      const res = await Client.put('/:post_id')
      return res.data 
    } catch (error){
      throw error
    }
  }
  
  
  export const UserPost = async (data) => {
    try {
      if(isNaN(data)){
        data = 1
      }
  
  
      const res = await Client.get(`/post/profile/${data}`)
      return res.data
    } catch (error) {
      throw error
    }
  }