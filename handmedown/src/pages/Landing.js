import React from "react";
import "../style/custom.css";
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap'
import Login from "./Login"


const Landing = () => {
//   let navigate = useNavigate();

  return (
    <div>
        <Login />
    </div>
  );
};

export default Landing;