import React, { useState } from 'react'

export default function FunctionalComponent(props) {  
    const [title,setTitle]= useState("");
    const [body,setbody]= useState("");
    const [select,setSelect]= useState("");

    return (
        <>
           Name<input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}></input><br/>
           Content <textarea required value={body} onChange={(e)=>setbody(e.target.value)}></textarea><br/>
           <select value={select} onChange={(e)=>setSelect(e.target.value)}>
               <option value='1'>1</option>
               <option value='2'>2</option>
           </select>
           <button>Add </button>
           <p>{title}</p>
           <p>{body}</p>
           <p>{select}</p>
        </>
    )
}
