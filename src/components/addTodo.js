import React, { useState } from 'react'


export const AddTodo=({addTodo}) =>{
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");

    const submit =(e)=>{
        e.preventDefault();
        if(!title || !des){
            alert("Title or Description cantnot be blank")
        }
        else{
        addTodo(title,des);
        setTitle("");
        setDes("");
        }
    }
    let addTodocss = {
        padding: "2vh 9vw",
    }
    return (
        <div className='bg-secondary' style={addTodocss}>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="des" className="form-label">Todo Description</label>
                    <input type="text" value={des} onChange={(e)=>{setDes(e.target.value)}} className="form-control" id="des"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success text-center">Add Todo</button>
            </form>
        </div>
    )
}

