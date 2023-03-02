import React,{useEffect,useState} from 'react'
import "./WeatherApp.css"

const WeatherApp = () => {
  const [city,setCity]=useState(null)
  const [search,setSearch]=useState("pune")

  useEffect(()=>{
const fetchApi=async ()=>{
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=75b2945402337f11db42e3d65c01f389`
const response=await fetch(url)
 //console.log("hy",response)
const resJson=await response.json()
 //console.log(resJson.main)
 setCity(resJson.main)

}
fetchApi()
  },[search])
  return (
    <div >
    <h1 className='weather'><i className="fa-solid fa-sun-cloud">⛅</i>Weather App </h1>
<div className='box'>
<div className='inputData'
>
    <input 
    type="search"
    className='inputField'
    value={search}
    onChange={(e)=>{
        setSearch(e.target.value)
    }} />

</div>


{!city ? (
  <p className='err'>No Data Found</p>

) :( <div>
  <div className="info">
    <h1 className="location">{search}</h1>
    <h2 className="temp"> 
    Current : {city.temp} &deg;C</h2>
    <h5 className="tempmin_max"> Min : {city.temp_min} &deg;C | Max :  {city.temp_max} &deg;C</h5>
   
  </div>
  <div className='wave -one'></div>
  <div className='wave -two'></div>
  <div className='wave -three'></div>
  </div>
)
}
 
 
</div>
    </div>
  )
}

export default WeatherApp

