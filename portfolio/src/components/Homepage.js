import React from 'react'
import img from '../assets/img/img.jpg'


function Homepage() {
  return (
    <div className='Main'>
      <div className='leftContainer'>
        <img src={img} alt=''/>
      </div>
      <div className='rightContainer'>
        <div className='rightContent'>
            <h2>Hello I' am </h2>
            <h1>Himanshu Thakur</h1>
            <h3>Student Of ABES Institute of</h3>
            <h3>Technology</h3>
            <div className='btn'>
                <button class="btn btnRight">Download ressume</button>
                <button class="btn btnLeft">Contact info</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
