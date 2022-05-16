import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row, Container } from 'react-bootstrap'
import PostCard from './PostCard'
import { useNavigate } from "react-router-dom";

const Posts = (users, props) => {
    let navigate = useNavigate();
    const showPost = (post) => {
      navigate(`${post.id}`);
    };
        useEffect(() => {
            getPosts()
        },[])

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const getPosts = async () => {
        try {
            const res = await axios.get('http://localhost:3001/post')
            setPosts(res.data)
            setLoading(true)
            console.log(res.data)
        } catch (err) {
            alert(err.message)
        }
    }
   


    return <Fragment>
        <Container>
        <Row>
            {loading && 
            posts.reverse().map((post) =>(
                <Col sm={12} med={6} lg={4} key={post.id}>
                    <PostCard onClick={() => showPost(post)} post={post} users={users}/>
                </Col>
            ))}
        </Row>
        </Container>
    </Fragment> 
       

}

export default Posts
