import { Link } from "react-router-dom";
import Logo from '../assets/images/Master_Logo.png'
import '../style/nav.css'
import React from "react";
import { useState, useEffect } from "react"
import { GiHamburgerMenu }  from 'react-icons/gi';
import { Container, Navbar } from 'react-bootstrap'
// import { CgProfile }  from 'react-icons/';



const Nav = ({ authenticated, user, handleLogOut }) => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)

    // cleanup function //
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])


  


    let authenticatedOptions
    if (user){ 
      authenticatedOptions = (
        
        <div className="header">
          <Navbar sticky='top' bg='primary' variant='dark'>
            <Container>
              <Navbar.Brand href='#home'> Contact Form </Navbar.Brand> 
            </Container>  
          </Navbar>
          <nav className="navigation">
            {(toggleMenu || screenWidth > 900) && (
              <ul className="list">
                <li className="navLinks">
                  {" "}
                  <Link to="/">
                    <div className="logo-wrapper" alt="logo">
                      <img className="logo" src={Logo} alt="ITB Logo" />
                    </div>
                  </Link>
                </li>
                <li className="navLinks"> Welcome {user.firstname} </li>
                <li className="navLinks">
                  <Link className="navLinks" to={"/feed"}>
                    Feed
                  </Link>
                </li>
                <li className="navLinks">
                  <Link className="navLinks" user={user} to={"/createPost"}>
                    Create Post
                  </Link>
                </li>
                <li className="navLinks">
                  <Link className="navLinks" to={"/profile"}>
                    Profile
                  </Link>
                </li>
                <li className="navLinks">
                  <Link className="navLinks" onClick={handleLogOut} to="/">
                    Sign Out
                  </Link>
                </li>
              </ul>
            )}
            <div className="navLinks">
                <button onClick={toggleNav} className="navBtn">
                  <GiHamburgerMenu />
                </button>
            </div>
          </nav>
        </div>
      );
    }
    let publicOptions = (
      <header>
      <div className="header">

        <nav className="navigation">
          <ul className="list">
            <li className="navLinks">
              <Link to="/">
                <div className="logo-wrapper" alt="logo">
                  <img className="logo" src={Logo} alt="ITB Logo" />
                </div>
              </Link>
            </li>  
            <li className="navLinks">
              <Link className="navLinks" to="/login"> Login </Link>
            </li> 
            <li className="navLinks">
              <Link className="navLinks" to= "/explore"> Explore </Link>
            </li>  
            <li className="navLinks">
              <Link className="navLinks" to="/createAccount">Create Account</Link>
            </li>  
          </ul>  
        </nav>
        </div>
        </header>
        )


        return (

          <header>
            {/* <Link to="/">
              <div className="logo-wrapper" alt="logo">
                <img
                  className="logo"
                  src={Logo}
                  alt="ITB Logo"
                />
                
              </div>
              
            </Link> */}
             { authenticated && user ? authenticatedOptions : publicOptions}
          </header>
        )
}

export default Nav