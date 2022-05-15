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

const ProfilePage = ({ user, authenticated }) => {
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
    <div>
      <div className="container">
        <div className="profile">
          <img className="profile-image" src={user.image} alt="profile-pic" />
          <div className="profile-user-settings">
            <h1 className="profile-user-name"> {user.username} </h1>

            <Link to="/edit">
              <button className="btn profile-edit-btn">
                {" "}
                Edit Profile <BsGearFill />
              </button>
            </Link>
          </div>

          <div className="profile-bio">
            <div>
              <span className="profile-real-name">
                {user.firstname} {user.lastname}
              </span>
            </div>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${user.email}`} target="_blank">
              <Button 
              style={{boarderRadius: '20px'}} 
              varient='primary'>
                Contact
              </Button>
              </a> 
          </div>
        </div>
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
  ) : (
    <div className="no-buddy">
      <h3> Please login to have access to our website.</h3>
      <button onClick={() => navigate("/login")}> Sign In</button>
      <button onClick={() => navigate("/createAccount")}> Register </button>
    </div>
  );
};


export default ProfilePage;


{/* <div class="container d-flex justify-content-center align-items-center">
             
             <div CclassName="card">

              <div CclassName="upper">

                <img src="https://i.imgur.com/Qtrsrk5.jpg" CclassName="img-fluid">
                
              </div>

              <div CclassName="user text-center">

                <div CclassName="profile">

                  <img src="https://i.imgur.com/JgYD2nQ.jpg" CclassName="rounded-circle" width="80">
                  
                </div>

              </div>


              <div CclassName="mt-5 text-center">

                <h4 CclassName="mb-0">Benjamin Tims</h4>
                <span CclassName="text-muted d-block mb-2">Los Angles</span>

                <button CclassName="btn btn-primary btn-sm follow">Follow</button>


                <div CclassName="d-flex justify-content-between align-items-center mt-4 px-4">

                  <div CclassName="stats">
                    <h6 CclassName="mb-0">Followers</h6>
                    <span>8,797</span>

                  </div>


                  <div CclassName="stats">
                    <h6 CclassName="mb-0">Projects</h6>
                    <span>142</span>

                  </div>


                  <div CclassName="stats">
                    <h6 CclassName="mb-0">Ranks</h6>
                    <span>129</span>

                  </div>
                  
                </div>
                
              </div>
               
             </div>

           </div> */}