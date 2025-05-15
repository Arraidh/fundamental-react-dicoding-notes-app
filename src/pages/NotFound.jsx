import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/">
        <button className="btn">Go to Main Page</button>
      </Link>
    </div>
  )
}

export default NotFound
