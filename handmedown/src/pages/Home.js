// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import Nav from '../components/Nav'
import React from 'react'
import { SliderData } from '../components/SliderData'
import ImageSlider from '../components/ImageSlider'
import '../style/home.css'

const Home = () => {
//   let navigate = useNavigate()

  return (
    <div className='slider'>
     <ImageSlider slides={SliderData} />
   
    </div>
  )
}

export default Home
