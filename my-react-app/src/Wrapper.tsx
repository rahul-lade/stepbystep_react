import React from 'react'

const Wrapper = ({children,color="blue"}) => {
  return (
    <div style={{color:color,border:"5px solid green"  }}>
          {children}
    </div>
  )
}

export default Wrapper