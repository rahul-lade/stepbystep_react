import React from 'react'
import Wrapper from './Wrapper';

const College = ({name}) => {
  console.log(name)
  return (
    <div>
      <div>{name[1]}</div>
      <div>{name[0]}</div>
      <div>{name} </div>
      <Wrapper>
        <h1></h1>
      </Wrapper>
    </div>
  )
}

export default College