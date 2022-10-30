import React from 'react'
import {Link} from 'react-router-dom'

function NoPage() {
  return (
    <div style={{textAlign: 'center', height: '100vh'}}>
      <h1>Uh oh! 🥺</h1>
      <h2>That page doesn't exist.</h2>
      <p>Go <Link to='/'>home</Link></p>
    </div>
  )
}

export default NoPage