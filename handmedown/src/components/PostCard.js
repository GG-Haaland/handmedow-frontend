import React from "react"
import { Button, Card} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const PostCard = ({ post, users }) => {
  console.log(post)
  console.log(users)
  let navigate = useNavigate();

  const showPost = (post) => {
    navigate(`post/${post.id}`);
  };
  return (
    <div>
        <Card className='my-3 p-3 rounded h-90' onClick={() => showPost(post)} key={post.id}>
          <Card.Img style={{objectFit:"contain"}} variant='top' src={post.image}/>
          <Card.Body>
            <h1 className='card-title h1'>
              {`${post.title}`}
              
            </h1 >
            <h3 className='mb-2 text-muted h3'>
              Price:
            </h3>
            <h4>
              <div>
              ${`${post.price}`} 
              </div>
            </h4>
            <h3 className='mb-2 text-muted'>
              Description:
            </h3>
            <h4>
              <div>
              {`${post.description}`} 
              </div>
            </h4>
            <h3 className='mb-2 text-muted'>
              Interested?
             
            </h3>
            <h4>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${post.email}`} 
            target="_blank"
            >
              <Button 
              style={{boarderRadius: '20px'}} 
              varient='primary'>
                Contact
              </Button>
              </a> 
            </h4>
       
          </Card.Body>

         
        </Card>
    </div>
  )
}

export default PostCard