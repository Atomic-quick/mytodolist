import React from 'react'

export const Todoitem = ({ todo, onDelete }) => {
    let mysty = {
        padding: "10px",
        'background-color': "gray",
    }
    return (
        <>
            <div className='container ' style={mysty}>
                <button className="btn btn-sm btn-danger"  onClick={() => { onDelete(todo) }}>Delete</button>
                <h4>{todo.title}</h4>
                <p>{todo.des}</p>
            </div>
        </>
    )
}
