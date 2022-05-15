import Client from './api'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/post')
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostById = async () => {
  try {
    const res = await Client.post('/postid')
  } catch(error) {
    throw error
  }
}

export const PostEdit = async (data) => {
  try {
    const res = await Client.put(`/post/${data.id}`,data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostDelete = async (data) => {
  try {
    const res = await Client.delete(`/post/${data.id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostCreate = async (data) => {
  try {
    const res = await Client.post('/post/createpost',data)
    return res.data 
  } catch (error){
    throw error
  }
}
export const PostAdder = async () => {
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