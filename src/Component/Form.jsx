import React, { useState } from 'react'

function form() {
    const [name,setName]  =useState("")
    function handlessubmit(e){
        e.preventDefault()
        console.log(name);
    }
      return (
    <div>
        <form onClick={handlessubmit} action="">
        <label htmlFor="">name</label>
        <input type="text"
        onChange={(e)=>setName(e.target.value)}
        />
        <input type="submit"/>
        </form>

    </div>
  )
}

export default form
