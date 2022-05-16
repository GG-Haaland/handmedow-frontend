import React, { useEffect, useState, Fragment } from 'react'
// import { useNavigate } from 'react-router-dom'
import { GetPostComments } from '../services/CommentServices'
import PostCard from './PostCard'



const Comments = (props, user) => {

    console.log(props)
    // let navigate = useNavigate()

    const [comments, setComments] = useState([])
 
    const [loading, setLoading] = useState(false)

    // const getPosts = async () => {
    //     try {
    //         const res = await axios.get('http://127.0.0.1:8000/post')
    //         setPosts(res.data)
    //         setLoading(true)
    //         console.log(res.data)
    //     } catch (err) {
    //         alert(err.message)
    //     }
    // }





    useEffect(() => {
        const handleComments = async () => {
            const data = await GetPostComments(props.postid)
            setComments(data)
        }
        handleComments()
    },[])




    return (



        <div className='comment-section'>

  
            {comments.map((comment) => (
                <div className="comment-single" key={comment.id}>
                
                <div>{props.username}:{comment.description}</div>
                {/* <div>Post Id: {comment.postid} </div> */}
           
                </div>
            ))}
           
        </div>
    )
}

export default Comments





