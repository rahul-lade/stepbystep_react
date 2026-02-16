import React from 'react'
import { useState } from 'react'

const Skills = () => {
    const [skills, setskills] = useState([''])
      const handleskills=(e)=>{
        console.log(e.target.value);
        setskills(e.target.value)
      }
  return (
    <div>
        <input onChange={handleskills}  type="checkbox" id="php" value="php" />
        <label htmlFor="php">PHP</label>
        <br />
        <br />
        <input onChange={handleskills}  type="checkbox" id="js" value="JS" />
        <label htmlFor="js">JS</label>
        <br />
        <br />
        <input  onChange={handleskills}  type="checkbox" id="node" value="node" />
        <label htmlFor="node">Node</label>
        <br />
        <br />
       

<h1>{skills.toString()}</h1>
    </div>
  )
}

export default Skills