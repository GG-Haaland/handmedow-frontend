import React, { useEffect, useState } from "react";
import { UserPost, PostEdit, PostDelete, } from "../services/PostServices";
import { useNavigate } from "react-router-dom";
import Comments from "../components/Comments";
import "../style/profile.css";
// import "../style/main.css"
// import "../style/Feed.css"
import { Link } from "react-router-dom";
import { BsGearFill }  from 'react-icons/bs';
import { Button, Card } from 'react-bootstrap'

const Profile = ({ user, authenticated }) => {
  let navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [editpost, editPost] = useState([false, 1]);
  const [editdesc, setDesc] = useState("");
  const [cardFocus,setCardFocus] = useState([false,{}])


  const navDelete = (post) => {
    navigate(`../post/${post.id}`);
    delPost(post);
  };
  const delPost = async (post) => {
    const sendload = {
      ...post,
    };
    console.log(sendload);
    const payload = await PostDelete(sendload);
    console.log(payload);
    console.log("deletepost");
  };
  const updatePost = (post) => {
    editPost([!editpost[0], post.id]);
    setDesc(post.description);
  };
  const handleChange = (e) => {
    setDesc(e.target.value);
  };
  const sendit = async (post) => {
    const sendload = {
      ...post,
      description: editdesc,
    };
    console.log(sendload);
    const payload = await PostEdit(sendload);
    console.log(payload);
  };

  const focusCard= (post) =>{
    setCardFocus([true,post])
  }
  

  useEffect(() => {
    const handlePosts = async () => {
      const data = await UserPost(user.id);
      setPosts(data);
    };
    handlePosts();
  }, [user.id]);





  return user && authenticated && posts ? (
<section className="h-100 gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card">
          <div className="rounded-top text-white d-flex flex-row" style="background-color: #000; height:200px;">
            <div className="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
              <img src={user.image} 
                alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                style="width: 150px; z-index: 1"/>
              <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"
                style="z-index: 1;">
                Edit profile
              </button>
            </div>
            <div className="ms-3" style="margin-top: 130px;">
              <h5>{user.firstname} {user.lastname}</h5>
   
            </div>
          </div>
          <div className="p-4 text-black" style="background-color: #f8f9fa;">
            <div className="d-flex justify-content-end text-center py-1">
              <div>
                <p className="mb-1 h5">253</p>
                <p className="small text-muted mb-0">Posts</p>
              </div>
              <div className="px-3">
                <p className="mb-1 h5">1026</p>
                <p className="small text-muted mb-0">Followers</p>
              </div>
              <div>
                <p className="mb-1 h5">478</p>
                <p className="small text-muted mb-0">Following</p>
              </div>
            </div>
          </div>
          <div className="card-body p-4 text-black">
            
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-normal mb-0">My Posts</p>
            </div>
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
                  <div className="follow-button-wrap">
                    <div className="follow-button"></div>
                  </div>
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
                <div className="buttons">
                  <div className="like-button-wrap2">
                    <div className="like-button"></div>
                  </div>
                </div>
              )}

              <Comments className="bigComm" postid={cardFocus[1].id} />
            </div>
          </div>
        ) : (
          <div>
            {posts.reverse().map((post) => (
              <div className="posts-in" key={post.id}>
                <img
                  src={post.image}
                  alt="location"
                  onClick={() => focusCard(post)}
                />

                {post.userid === user.id ? (
                  <div className="buttons">
                    <div className="follow-button-wrap">
                      <div className="follow-button"></div>
                    </div>
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
                  <div className="buttons"></div>
                )}

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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
          </div>
        </div>
      </div>
   
</section>
  ) : (
    <div className="no-buddy">
      <h3> Please login to have access to our website.</h3>
      <button onClick={() => navigate("/login")}> Sign In</button>
      <button onClick={() => navigate("/createAccount")}> Register </button>
    </div>
  );
          
  
}

export default Profile;



<div class="container mt-5 d-flex justify-content-center">

<div class="card p-3">

    <div class="d-flex align-items-center">

        <div class="image">
    <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" class="rounded" width="155" >
    </div>

    <div class="ml-3 w-100">
        
       <h4 class="mb-0 mt-0">Alex HMorrision</h4>
       <span>Senior Journalist</span>

       <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">

        <div class="d-flex flex-column">

            <span class="articles">Articles</span>
            <span class="number1">38</span>
            
        </div>

        <div class="d-flex flex-column">

            <span class="followers">Followers</span>
            <span class="number2">980</span>
            
        </div>


        <div class="d-flex flex-column">

            <span class="rating">Rating</span>
            <span class="number3">8.9</span>
            
        </div>
           
       </div>


       <div class="button mt-2 d-flex flex-row align-items-center">

        <button class="btn btn-sm btn-outline-primary w-100">Chat</button>
        <button class="btn btn-sm btn-primary w-100 ml-2">Follow</button>

           
       </div>


    </div>

        
    </div>
    
</div>
 
</div>