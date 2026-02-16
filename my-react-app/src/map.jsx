import React from 'react'

const Map = ({usrrrer}) => {
  return (
    <div>
        <h1>{usrrrer.name}</h1>
        <h1>{usrrrer.age}</h1>
        <h1>{usrrrer.email}</h1>
    </div>
  )
}

export default Map