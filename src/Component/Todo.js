import React from 'react'

export default props => (

    <div className='d-flex justify-content-between mb-3 border-bottom pb-2'>
        <div style={{
            textDecoration: props.todo.complete ? "line-through" : "" 
            , color: props.todo.complete ? "gray" : ''
        }}
            onClick={props.toggleComplete}
            >
            {props.todo.text}

        </div>
        <button className='btn text-danger' onClick={props.onDelete}>x</button>


    </div>
); 