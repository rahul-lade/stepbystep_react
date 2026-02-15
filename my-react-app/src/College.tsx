import React from 'react'

const College = ({name}) => {
  console.log(name)
  return (
    <div>
      <div>{name[1]}</div>
      <div>{name[0]}</div>
      <div>{name} </div>
    </div>
  )
}

export default College