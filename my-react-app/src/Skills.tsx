import React from 'react'
import { useState } from 'react'

const Skills = () => {
    const [skills, setskills] = useState(['']);
      const handleskills=(e)=>{
        console.log(e.target.value);
        if(e.target.checked){
          setskills([...skills,e.target.value])
      }else{
        setskills(skills.filter((skill)=>skills!==e.target.value))
      }
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
        <input  onChange={handleskills}  type="checkbox" id="nodeeee" value="neeode" />
        <label htmlFor="node">Node</label>
        <br />
        <br />
       

<h1>{skills} </h1>
<button onClick={() => setskills([])}>Clear Skills</button>
    </div>
  )

}

export default Skills