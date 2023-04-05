import React, { useEffect, useState } from 'react'
import './RawPost.css'
import axios from '../../axios'
import {  imageurl } from '../../constants/constant'
import { original } from '../../url'
function RawPost(props) {
  const [movies, setmovies] = useState([])
useEffect(() => {
 axios.get(props.url).then((res)=>{
    console.log(res.data)
    setmovies(res.data.results)
 }).catch(err=>{
  //alert('Network Error')
 })
  }
 ,[])

  return (
    <div className='Raw'> 
    <h2>{props.title}</h2>
    <div className= 'Posters'>
      {movies.map((obj)=><img className={props.isSmall?'smallposter':'poster'}  src={`${imageurl+obj.poster_path}`} alt="poster" />
)}
    
    </div>
    </div>
  )
}

export default RawPost
