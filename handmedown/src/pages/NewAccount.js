import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateUser } from '../services/auth'


const NewAccount = () =>{

    const [formVal, setForm] = useState({
        username:"",
        firstname:"",
        lastname:"",
        email:"",
        image: "",
        password:"",
        passwordCheck:"",
    })
    let navigate = useNavigate()

    const handleChange = (e)=>{
        setForm({ ...formVal, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log("Creating User")
        await CreateUser({
            username: formVal.username,
            firstname: formVal.firstname,
            lastname: formVal.lastname,
            email: formVal.email,
            image: formVal.image,
            passwordtemp: formVal.password
          })
          setForm({
            firstname:"",
            lastname:"",
            username: '',
            email: '',
            image: "",
            password: '',
            confirmPassword: ''
          })

        navigate("/login")
    }

    return (
        <div>
            <div>
            <form onSubmit={handleSubmit}>
               
                <div className="input-wrap-register">
                <input
                autoComplete='first name'
                onChange={handleChange}
                name="firstname"
                type="text"
                placeholder="First Name"
                value={formVal.firstname}
                required
                />
                </div>
                <div className="input-wrap-register">
                <input
                autoComplete='last name'
                onChange={handleChange}
                name="lastname"
                type="text"
                placeholder="Last Name"
                value={formVal.lastname}
                required
                />
                </div>

                <div className="input-wrap-register">
                <input
                autoComplete='username'
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="User Name"
                value={formVal.username}
                required
                />
                </div>
                
                <div className="input-wrap-register">
                <input
                autoComplete='email'
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="E-Mail"
                value={formVal.email}
                required
                />
                </div>

                <div className="input-wrap-register">

                <input
                onChange={handleChange}

                name="password"
                type="password"
                placeholder="PASSWORD"
                value={formVal.password}
                required
                />
                </div>
                <div className="input-wrap-register">

                <input
                onChange={handleChange}
                autoComplete="current-password"
                name="passwordCheck"
                type="password"
                placeholder="RE-PASSWORD"
                value={formVal.passwordCheck}
                required
                />
                </div>

                <div className="input-wrap-register">
                <input
                autoComplete='https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg'
                onChange={handleChange}
                name="image"
                type="text"
                placeholder="Profile Picture URL"
                value={formVal.image}
                />
                </div>
               
                
               
                <button
                disabled={
                !formVal.email ||
                (!formVal.password &&
                    formVal.passwordCheck === formVal.password)
                }
                > Sign Up</button>
            </form>

            </div>
        </div>
    )

}

export default NewAccount