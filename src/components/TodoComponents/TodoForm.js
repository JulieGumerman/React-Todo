import React from "react";

function TodoForm() {
    return (
        <form>
            <input type="text" placeholder="todo"></input>
            <button type="submit">Commit to the thing!</button>
            <button>Clear all!</button>
        </form>
    );
}

export default TodoForm;