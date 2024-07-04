import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollTop() {
    const location = useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[location])
  return (
    <div></div>
  )
}

export default ScrollTop