import React from 'react'

const User = ({info}) => {
    // console.log(props)
  return (
    <div>
        <hr />
        <div>{info.name} </div>
        <div>{info.age} </div>
        <div>{info.email} </div>
    </div>
  )
}

export default User