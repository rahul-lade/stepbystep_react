import React from 'react'

const User = ({name,age,email}) => {
    // console.log(props)
  return (
    <div>
        <div>{name} </div>
        <div>{age} </div>
        <div>{email} </div>
    </div>
  )
}

export default User