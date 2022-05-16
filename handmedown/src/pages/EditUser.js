import React, {  useState } from "react";
import { EditAccount } from "../services/UserServices";
import "../style/profile.css";
import { useNavigate } from "react-router-dom";

const Edit = ({ user, authenticated, setUser, props }) => {
    let navigate = useNavigate();
    
  const [formVal, setForm] = useState({
    id: user.id,  
    username: user.username,
    image: user.image,
   
})

    const preSubmit = () => {
        const tempuser = user
        tempuser.image = formVal.image
        tempuser.username = formVal.username
       
    
        console.log(tempuser)
        console.log(user)
        setUser(tempuser) 
        handleSubmit()   
    }
    

const handleChange = (e) =>{
    setForm({ ...formVal, [e.target.name]: e.target.value })
}
const handleSubmit = async(e) =>{
    e.preventDefault();
    const payload = await EditAccount({...formVal})
    navigate("/profile");
    window.location.reload()
    console.log(payload)
    
}

 // Allows users to use "Enter" keybind to sign in
 const handleKeypress = e => {
    // Triggers by pressing the enter key
  if (e.keyCode === 13) {
      preSubmit()
  }   
}

return(
    <div className='create-post-wrap' onKeyPress={handleKeypress}>
        <div>
            <form onSubmit={preSubmit} >
            {formVal.image &&  <img src={formVal.image} className="image-prof" alt="profileImage" />}

            <div className="input-wrap">
                ImageURL:
            <input
            onChange={handleChange}
            name="image"
            type="text"
            placeholder="Profile Picture URL"
            value={formVal.image}
            />
            </div>

           

            <div className="input-text-wrap">
                Username:
            <input className="textarea-profile"
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="New Username"
            value={formVal.username}
            />
            </div>
            <button
            onClick={(e) => handleSubmit(e)}
            disabled={
                !authenticated ||
                !user                
            }
            >
                Submit</button>
            </form>
                <div className="changes"> Changes will take effect next sign in session.</div>
        </div>
    </div>
)
}

export default Edit;