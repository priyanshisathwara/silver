import React from 'react'
import { Link } from 'react-router-dom'

const BackBtn = () => {
  return (
    <div style={{marginLeft: '20px'}}>
        <Link to={'/'} >{`< Back`}</Link>
    </div>
  )
}

export default BackBtn