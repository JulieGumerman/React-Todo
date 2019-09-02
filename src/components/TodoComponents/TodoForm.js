import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        }
    }
    manageSubmit = event => {
        event.preventDefault();
        this.props.addToDo(this.state.task)
        this.setState({task:""});
        
      }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
      }

    render() {
        return (


        <form onSubmit={event =>this.manageSubmit(event)}>
        <input type="text" name="task" placeholder="to do" onChange={this.handleChange} value={this.state.task} />
        <button type="submit">Commit to the thing!</button>
        <button onClick={this.props.clearCompleted}>Clear all!</button>
        </form>
        );
    }//close render
} //close class

export default TodoForm;