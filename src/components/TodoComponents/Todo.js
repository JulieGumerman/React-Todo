import React from "react";
import "./Todo.css";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div className={this.props.todo.completed?"completed": ""} onClick={()=>this.props.toggleCompleted(this.props.todo.id)}>
                {this.props.todo.task}
            </div>
        )
    }
}

export default Todo;