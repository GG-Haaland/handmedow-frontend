// import { Link } from "react-router-dom";
// import Logo from '../assets/images/Master_Logo.png'


// import React from "react";
// // import { useState, useEffect } from "react"
// // import { GiHamburgerMenu }  from 'react-icons/gi';
// import { Button } from 'react-bootstrap'
// // import { CgProfile }  from 'react-icons/';
import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";



const NavBar = ({ authenticated, user, handleLogOut }) => {

//   const [toggleMenu, setToggleMenu] = useState(false)
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth)


//   const toggleNav = () => {
//     setToggleMenu(!toggleMenu)
//   }

//   useEffect(() => {
//     const changeWidth = () => {
//       setScreenWidth(window.innerWidth)
//     }
//     window.addEventListener('resize', changeWidth)

//     // cleanup function //
//     return () => {
//       window.removeEventListener('resize', changeWidth)
//     }
//   }, [])


  


    let authenticatedOptions
    if (user) {
      authenticatedOptions = (
        <div className="App">
          <ReactBootStrap.Navbar
            collapseOnSelect
            expand="lg"
            bg="danger"
            variant="dark"
          >
            <ReactBootStrap.Navbar.Brand href="#home">
            <Link to="/">
                <ReactBootStrap.Nav.Link href="#home">
                  HandMeDown
                </ReactBootStrap.Nav.Link>
              </Link>
              
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="mr-auto">
                <Link to="/feed">
                  <ReactBootStrap.Nav.Link href="#feed">
                    Feed
                  </ReactBootStrap.Nav.Link>
                </Link>
                <ReactBootStrap.NavDropdown
                  title={user.username}
                  id="collasible-nav-dropdown"
                >
                  <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                  <Link to="/edit">
                  {/* <ReactBootStrap.Nav.Link href="#action/3.1"> */}
                   Edit User
                  {/* </ReactBootStrap.Nav.Link> */}
                </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  <Link to="/profile">
                  {/* <ReactBootStrap.Nav.Link href="#action/3.1"> */}
                   Profile
                  {/* </ReactBootStrap.Nav.Link> */}
                </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                  <Link to="/usersPosts">
                  {/* <ReactBootStrap.Nav.Link href="#action/3.1"> */}
                   My Posts
                  {/* </ReactBootStrap.Nav.Link> */}
                </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Divider />
                  <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                  <Link to="/createpost">
                 
                    Create Post
                  
                </Link>
                  </ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                <Link to="/createpost">
                  <ReactBootStrap.Nav.Link href="#createpost">
                    Create Post
                  </ReactBootStrap.Nav.Link>
                </Link>
                <Link onClick={handleLogOut} to="/" >
                  <ReactBootStrap.Nav.Link href="#logout">
                    Logout
                  </ReactBootStrap.Nav.Link>
                </Link>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Navbar>
        </div>
      );
    }
    let publicOptions = (
      <div className="App">
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="lg"
          bg="danger"
          variant="dark"
        >
            
          <ReactBootStrap.Navbar.Brand href="#home">
          <Link to="/">
                <ReactBootStrap.Nav.Link href="#home">
                  HandMeDown
                </ReactBootStrap.Nav.Link>
              </Link>
          </ReactBootStrap.Navbar.Brand>
          
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <Link to="/login">
                <ReactBootStrap.Nav.Link href="#login">
                  Login
                </ReactBootStrap.Nav.Link>
              </Link>
              <Link to="/explore">
                <ReactBootStrap.Nav.Link href="#explore">
                  Explore
                </ReactBootStrap.Nav.Link>
              </Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <Link to="/createAccount">
                <ReactBootStrap.Nav.Link href="#createAccount">
                  Create Account
                </ReactBootStrap.Nav.Link>
              </Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );


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

export default NavBar


// import React from 'react';
// import * as ReactBootStrap from "react-bootstrap";
// import {
//     BrowserRouter as Router,
//     Link
//   } from "react-router-dom";

// const NavBar = () => {
//     return(
//         <div className="App">
//     <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
//   <ReactBootStrap.Navbar.Brand href="#home">HandMeDown</ReactBootStrap.Navbar.Brand>
//   <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
//     <ReactBootStrap.Nav className="mr-auto"> 
//     <Link to="/feed">
//     <ReactBootStrap.Nav.Link href="#feed">Feed</ReactBootStrap.Nav.Link>
//     </Link>
//     <Link to="/profile">
//     <ReactBootStrap.Nav.Link href="#profile">profile</ReactBootStrap.Nav.Link>
//     </Link>
//       <ReactBootStrap.NavDropdown title="YEET" id="collasible-nav-dropdown">
//         <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
//         <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
//         <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
//         <ReactBootStrap.NavDropdown.Divider />
//         <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
//       </ReactBootStrap.NavDropdown>
//     </ReactBootStrap.Nav>
//     <ReactBootStrap.Nav>
//     <Link to="/createpost">
//     <ReactBootStrap.Nav.Link href="#createpost">Create Post</ReactBootStrap.Nav.Link>
//     </Link>
//     <Link to="/">
//     <ReactBootStrap.Nav.Link onClick={handleLogOut} to="/">
//         Logout
//       </ReactBootStrap.Nav.Link>
//     </Link>
//     </ReactBootStrap.Nav>
//   </ReactBootStrap.Navbar.Collapse>
// </ReactBootStrap.Navbar>
//         </div>
//     )
// }

// export default NavBar;