import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

//This is a random extra note so I could open a pull request. When I started this assignment, I thought it was recommended rather than required, which is why I did not open an additional branch. 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stuffToDo : [
       {task: "pet dogs",
       id: 1,
       completed: false
      },
      {task: "finish this assignment",
        id: 2,
        completed: false
      }
      ],
      task: ""
    }
  }

  toggleCompleted = id => {
    console.log(id);
    this.setState({
      stuffToDo: this.state.stuffToDo.map(todo => {
        if (id===todo.id) {
          return {...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      })//ends map
    }) //ends set state
  }

  clearCompleted = () => {
    this.setState({ 
      stuffToDo: this.state.stuffToDo.filter(todo => {
        return !todo.completed;
      })
    })
  }


  addToDo= task => {
    this.setState({
      stuffToDo: [...this.state.stuffToDo, {
        task: task, 
        id: Date.now(),
        completed: false
      }],

    })

  }



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoForm addToDo={this.addToDo} clearCompleted={this.clearCompleted}/>
        <div>
          <TodoList state={this.state} toggleCompleted={this.toggleCompleted} />
        </div>
      </div>
    );
  }
}

export default App;
