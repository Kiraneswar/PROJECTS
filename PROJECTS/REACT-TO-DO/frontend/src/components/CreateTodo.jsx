/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useState } from "react";

export function CreateTodo(props){

    let [title,setTitle]=useState("");
    let [description,setDescription]=useState("");
    return <div>
        <input id="title" style={{
            padding:10,
            margin:10
        }}
         type="text" placeholder="title" onChange={function(e){
            let value=e.target.value;
            setTitle(e.target.value);
         }} /> <br />
        <input id="desc" style={{
            padding:10,
            margin:10
        }}
        type="text" placeholder="description" onChange={function(e){
            let value=e.target.value;
            setDescription(e.target.value);
         }} /> <br />
        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            fetch("http://localhost.3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(async function(res){
                const json=await res.json();
            })
            props.setSetTodos([...todos,{
                 title,
                 description,
            }])
        }}>Add a todo</button>
    </div>
}