import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from '../components/Comments';
// routes

const PostDeets = (posts) => {
  let { id } = useParams();

  const [selectedPost, setPost] = useState("");

  useEffect(() => {
    let selectedPost = posts.find((posts) => posts.id === parseInt(id));
    setPost(selectedPost);
  }, [posts, id]);

  return selectedPost ? (
    <div className="detail">
      <div className="detail-header">
        <img src={selectedPost.img} alt={selectedPost.title} />
        <div
          style={{
            minWidth: "30em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{selectedPost.title}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Comments />
          <h3>Details {selectedPost.details}</h3>
          
        </div>
        <p>{selectedPost.description}</p>
      </div>
    </div>
  ) : null;
};

export default PostDeets;
