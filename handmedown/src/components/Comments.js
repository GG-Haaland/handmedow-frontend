import React, {useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { GetPostComments } from '../services/CommentServices'


const Comments = (props) => {


    // let navigate = useNavigate()

    const [comments, setComments] = useState([])




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
                <div>{comment.description}</div>
                {/* <div>Post Id: {comment.postid} </div> */}
                
                </div>
            ))}
        </div>
    )
}

export default Comments





