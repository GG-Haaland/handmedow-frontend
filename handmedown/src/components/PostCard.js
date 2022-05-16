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
            <Card.Title>
              {`${post.title}`}
              
            </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              Price:
            </Card.Subtitle>
            <Card.Text>
              <div>
              ${`${post.price}`} 
              </div>
            </Card.Text>
            <Card.Subtitle className='mb-2 text-muted'>
              Description:
            </Card.Subtitle>
            <Card.Text>
              <div>
              {`${post.description}`} 
              </div>
            </Card.Text>
            <Card.Subtitle className='mb-2 text-muted'>
              Interested?
             
            </Card.Subtitle>
            <Card.Text>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${post.email}`} 
            target="_blank"
            >
              <Button 
              style={{boarderRadius: '20px'}} 
              varient='primary'>
                Contact
              </Button>
              </a> 
            </Card.Text>
       
          </Card.Body>

         
        </Card>
    </div>
  )
}

export default PostCard