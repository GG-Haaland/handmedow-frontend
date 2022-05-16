import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";
import '../style/nav.css'



const NavBar = ({ authenticated, user, handleLogOut }) => {

    let authenticatedOptions
    if (user) {
      authenticatedOptions = (
        <div className="App navbar-light">
          <ReactBootStrap.Navbar
            collapseOnSelect
            expand="lg"
            bg="danger"
            variant="primary"
          >
            <ReactBootStrap.Navbar.Brand href="#home" className="text-decoration-none">
            <Link className="text-decoration-none" to="/">
                <ReactBootStrap.Nav.Link href="#home">
                  HandMeDown
                </ReactBootStrap.Nav.Link>
              </Link>
              
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="mr-auto">
                <Link to="/feed" className="text-decoration-none">
                  <ReactBootStrap.Nav.Link href="#feed" className="text-decoration-none">
                    Feed
                  </ReactBootStrap.Nav.Link>
                </Link>
                <ReactBootStrap.NavDropdown
                  title={user.username}
                  id="collasible-nav-dropdown"
                >
                  <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                  <Link to="/edit" className="text-decoration-none">
                  
                   Edit User
                  
                </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  <Link to="/profile" className="text-decoration-none">
                  {/* <ReactBootStrap.Nav.Link href="#action/3.1"> */}
                   Profile
                  {/* </ReactBootStrap.Nav.Link> */}
                </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                  <Link to="/usersPosts" className="text-decoration-none">
                  {/* <ReactBootStrap.Nav.Link href="#action/3.1"> */}
                   My Posts
                  {/* </ReactBootStrap.Nav.Link> */}
                </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Divider />
                  <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                  <Link to="/createpost" className="text-decoration-none">
                 
                    Create Post
                  
                </Link>
                  </ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                <Link to="/createpost" className="text-decoration-none">
                  <ReactBootStrap.Nav.Link href="#createpost">
                    Create Post
                  </ReactBootStrap.Nav.Link>
                </Link>
                <Link onClick={handleLogOut} to="/" className="text-decoration-none" >
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
             { authenticated && user ? authenticatedOptions : publicOptions}
          </header>
        )
}

export default NavBar
