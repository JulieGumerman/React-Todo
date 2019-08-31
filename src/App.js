import React from 'react';



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
      ]
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  manageSubmit = event => {
    event.preventDefault();
    console.log("Submission!!!");
  }
  
  handleChange = event => {
    let taskList = this.state.stuffToDo;
    console.log(event.target.value);
    this.setState([...taskList, {task: event.target.value, id: Date.now(), completed: false}]);
    console.log("l'etat, c'est moi!", this.state);
  }

  clearList = () => {
    this.setState({task: "", id: null, completed: null});
    console.log("are we empty?", this.state);
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <form onSubmit={event =>this.manageSubmit(event)}>
            <input type="text" placeholder="to do" onChange={this.handleChange}></input>
            <button type="submit">Commit to the thing!</button>
            <button onClick={this.clearList}>Clear all!</button>
        </form>
        <div>
          <ul>
            {this.state.stuffToDo.map(thing => <li key={thing.id}>{thing.task}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
