// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

const TodoList = props => {
    
    const clicked = () => {
        alert(`You clicked on me! Ouch!`);
    }

    return (
        <ul>
            {props.state.stuffToDo.map(thing => <li key={thing.id} onClick={clicked}>{thing.task}</li>)}
        </ul>
    );
}

export default TodoList;