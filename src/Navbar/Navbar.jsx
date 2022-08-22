import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",gap:"2rem",margin:"auto",justifyContent:"center"}}>
        <div><Link to="/">Home</Link></div>
       <div> <Link to="/dashboard">Dashboard</Link></div>
    </div>
  )
}

export default Navbar