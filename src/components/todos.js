import React from 'react'
import { Todoitem } from './todoitem'

export const Todos = (props) => {
    let mysty = {
        display: "grid",
        'grid-template-columns': "auto auto auto",
        'grid-gap': "10px"
    }
    let h3 ={
        padding: "10px",
    }
    return (
        <div className=''> 
            <h3 className='text-center' style={h3}>Todos List</h3>
            <div className='container' style={mysty}>
                {props.todos.length === 0 ? "no todos to display" :
                    props.todos.map((todo) => {
                        return (<Todoitem todo={todo} key={todo.id} onDelete={props.onDelete} />);
                    })}
            </div>
        </div>
    );
};
