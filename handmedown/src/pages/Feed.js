import React, {useEffect, useState } from 'react'
import { PostEdit, GetPosts, PostDelete  } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'
// import '../style/Feed.css'
import Comments from '../components/Comments'
import PostCard from '../components/PostCard'
import { Col, Row, Button, Card } from 'react-bootstrap'


const Feed = ({user, authenticated}) => {

    let navigate = useNavigate()

    const [posts, setPosts] = useState([])
    const [editpost, editPost] = useState([false,user.id])
    const [editdesc, setDesc] = useState('')
    const [cardFocus,setCardFocus] = useState([false,{}])
    



 


    const updatePost =( post) =>{
        editPost([!editpost[0],post.id])
        setDesc(post.description)
    }


    const navDelete=(post)=>{
        navigate(`../post/${post.id}`)
        delPost(post)
    }
    const delPost = async( post) =>{

        const sendload = {
            ...post,
         }
         const payload = await PostDelete(sendload)
         console.log('Post Deleted',payload)
    }
    const handleChange = (e) =>{
        setDesc(e.target.value)
    }
    const sendit = async(post) =>{
        const sendload = {
           ...post,
            description:editdesc
        }
        const payload = await PostEdit(sendload)
        console.log(payload)
    }
    const focusCard= (post) =>{
      setCardFocus([true,post])
    }

   

    useEffect(() => {
        const handlePosts = async () => {
            const data = await GetPosts()
            setPosts(data)
        }
        handlePosts()
    },[])


    return user && authenticated ? (
      <div className="posts-out">
        {cardFocus[0] ? (
          <div>
            <div className="focuscard">
              <img
                src={cardFocus[1].image}
                alt="location"
                className="bigImage"
                onClick={() =>
                  setCardFocus(...cardFocus, (cardFocus[0] = false))
                }
              />

              <div className="bigDesc">{cardFocus[1].description}</div>
              {cardFocus[1].userid === user.id ? (
                <div className="buttons">
                  <div
                    className="edit-button-wrap"
                    onClick={() => updatePost(cardFocus[1])}
                  >
                    <div className="edit-button"></div>
                  </div>
                  <div
                    className="del-button-wrap"
                    onClick={() => navDelete(cardFocus[1])}
                  >
                    <div className="del-button"></div>
                  </div>
                </div>
              ) : (
                <div className="buttons"></div>
              )}
              
              <Comments postid={cardFocus[1].id} />
            </div>
            {/* <Comments className='bigComm' postid = {cardFocus[1].id}/> */}
          </div>
        ) : (
          <div className="container">
            <Row>
              {posts.reverse().map((post) => (
                // <div className="card" key={post.id}>
                <Col sm={12} med={6} lg={4} key={post.id}>
                  <Card className="my-3 p-3 rounded h-90">
                    <Card.Img
                      // className="card-img-top"
                      style={{ objectFit: "contain" }}
                      variant="top"
                      src={post.image}
                      alt="location"
                      onClick={() => focusCard(post)}
                    />
                    <Card.Body>
                      <Card.Title>{`${post.title}`}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Price:
                      </Card.Subtitle>
                      <Card.Text>
                        <div>${`${post.price}`}</div>
                      </Card.Text>
                      <Card.Subtitle className="mb-2 text-muted">
                        Description:
                      </Card.Subtitle>
                      <Card.Text>
                        <div>{`${post.description}`}</div>
                      </Card.Text>
                      <Card.Subtitle className="mb-2 text-muted">
                        Sold by:
                      </Card.Subtitle>
                      <Card.Text>
                        <div>{`${post.userid}`}</div>
                      </Card.Text>
                      {/* <div class="card-body">
                      <h3 class="card-title">{post.title}</h3>
                      <h4 class="card-text">${post.price}</h4> */}
                      {/* <p class="card-text">{post.description}</p> */}
                      {/* <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div> */}
                    </Card.Body>
                  </Card>

                  {/* {post.userid === user.id ? (
                  <div className="buttons">
                    <div
                      className="edit-button-wrap"
                      onClick={() => updatePost(post)}
                    >
                      <div className="edit-button"></div>
                    </div>
                    <div
                      className="del-button-wrap"
                      onClick={() => navDelete(post)}
                    >
                      <div className="del-button"></div>
                    </div>
                  </div>
                ) : (
                  <div className="buttons">
                   
                  
                  </div>
                )} */}

                  <div className="posts-description">
                    {editpost[0] && editpost[1] === post.id ? (
                      <div className="edit-desc">
                        <textarea
                          onChange={handleChange}
                          name="description"
                          type="text"
                          placeholder="decription"
                          value={editdesc}
                          required
                        />
                        <button onClick={() => sendit(post)}>SEND IT</button>
                      </div>
                    ) : (
                      <p>{post.username}</p>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    ) : (
      <div className="no-buddy">
        <h3> Please login to have access to our website.</h3>
        <button onClick={() => navigate("/login")}> Sign In</button>
        <button onClick={() => navigate("/createAccount")}> Register </button>
      </div>
    );
}

export default Feed