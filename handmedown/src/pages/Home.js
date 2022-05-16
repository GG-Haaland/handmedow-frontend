// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import Nav from '../components/Nav'
import React from 'react'
import { SliderData } from '../components/SliderData'
import ImageSlider from '../components/ImageSlider'
import '../style/home.css'
import Back from '../assets/images/home.png'

const Home = () => {


const myStyle={
  backgroundImage: 
"url(`${Back}`)",
  height:'100vh',
  marginTop:'-70px',
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

  return (
    // <div style={myStyle}>
      <div className='slider'>
      <ImageSlider slides={SliderData} />
    
      </div>
    // </div>
  )
}

export default Home
