import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserSignIn } from '../services/auth'
import '../style/custom.css'
import { Form } from 'react-bootstrap'

const Login = (props) =>{
let navigate = useNavigate()

    const [formVal, setFormVal] = useState({
        email:"",
        password:""
    })
    const handleChange = (e) =>{
        setFormVal({ ...formVal, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await UserSignIn(formVal)
        setFormVal({ email: '', password: '' })
        props.setUser(payload)
        if (payload){
            props.toggleAuthenticated(true)
        }else{
            props.toggleAuthenticated(false)
        }
        navigate('/profile')
      }

      // Allows users to use "Enter" keybind to sign in
      const handleKeypress = e => {
          // Triggers by pressing the enter key
        if (e.keyCode === 13) {
            handleSubmit()
        }   
      }

    return(
        <div onKeyPress={handleKeypress}>
            <div className="color-overlay d-flex justify-content-center align-items-center">
                <Form className="rounded p-4 p-sm-3" onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                <Form.Control
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="email"
                value={formVal.email}
                required
                />
                </Form.Group>
                <div className="input-wrap-register">
                <input
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="P@$$W0RD"
                value={formVal.password}
                onKeyPress={handleKeypress}
                required
                />
                </div>
                <button  className= 'sign-in'
                disabled={
                    !formVal.email ||
                    !formVal.password                 
                }
                > Sign In</button>
                </Form>
            </div>
        </div>
    )
}

export default Login

{/* <div
        onKeyPress={handleKeypress}
        className="color-overlay d-flex justify-content-center align-items-center"
      >
        <Form className="rounded p-4 p-sm-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="email"
              placeholder="Enter Email"
              value={formVal.email}
              required
            />
            <Form.Text className="test-muted">
              We'll never share your email with anyone else
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="password"
              placeholder="password"
              value={formVal.password}
              onKeyPress={handleKeypress}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <button  className= 'sign-in'
                disabled={
                    !formVal.email ||
                    !formVal.password                 
                }
                > Sign In</button>
        </Form>
      </div>
    ); */}