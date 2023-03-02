import React,{useEffect,useState} from 'react'
import "./WeatherApp.css"
const WeatherApp = () => {
  return (
    <>
<div class='box'>
<div className='inputData'
>
    <input 
    type="search"
    className='inputField'
    onChange={()=>{
        
    }} />
</div>
 
  <div class="info">
    <h2 class="location">SUNNYVILLE</h2>
    <p class="date">MONDAY | SEP 12 | 12:34</p>
    <h1 class="temp">25 &deg;C | 77 &deg;F</h1>
   
  </div>
  <div class='wave -one'></div>
  <div class='wave -two'></div>
  <div class='wave -three'></div>
</div>
    </>
  )
}

export default WeatherApp
