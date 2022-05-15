import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PostCreate } from '../services/PostServices'
import '../style/custom.css'

const Login = ({user, authenticated}) =>{
    const [formVal, setForm] = useState({
        description:"",
        image:"",
        price:"",
        title:""
    })
    const navigate = useNavigate()

    const handleChange = (e) =>{
        setForm({ ...formVal, [e.target.name]: e.target.value })
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const payload = await PostCreate({...formVal, userid:user.id})
        console.log(payload)
        navigate('/profile')
        
    }

    return(
        <div  className="color-overlay d-flex justify-content-center align-items-center">
            <div>
                <form onSubmit={handleSubmit} className="rounded p-4 p-sm-3">
                {formVal.image &&  <img src={formVal.image} alt="postimage"  className='picture'/>}

                <div className="rounded p-4 p-sm-3">
                <input
                onChange={handleChange}
                name="image"
                type="text"
                placeholder="Image URL"
                value={formVal.image}
                required
                />
                </div>
                <div className="rounded p-4 p-sm-3">
               
                <input
                onChange={handleChange}
                name="title"
                type="text"
                placeholder="Title"
                value={formVal.title}
                required
                />
                </div>
                <div className="rounded p-4 p-sm-3">
                <textarea className="textarea"
                onChange={handleChange}
                name="description"
                type="text"
                placeholder="Description..."
                value={formVal.description}
                required
                />
                </div>
                <div className="rounded p-4 p-sm-3">
                <textarea className="textarea"
                onChange={handleChange}
                name="price"
                type="text"
                placeholder="price..."
                value={formVal.price}
                required
                />
                </div>
                <button
                disabled={
                !authenticated ||
                !user                
                }
                >Submit</button>
                </form>
            </div>
        </div>
    )
}


export default Login