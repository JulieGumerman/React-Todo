import React from "react";

function TodoForm() {
    return (
        <div>
            <input type="text" placeholder="todo"></input>
            <button type="submit">Commit to the thing!</button>
            <button>Clear all!</button>
        </div>
    );
}

export default TodoForm;