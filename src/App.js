import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      id: Date.now(),
      completed: false
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  manageSubmit = event => {
    event.preventDefault();
    console.log("Submit that shit!");
  }

  addItem = event => {
  let items = [];    
    console.log(event.target.value);
    items.push(event.target.value);
    items.map(item => <p>{item}</p>);
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div onSubmit={this.manageSubmit}>
            <input type="text" placeholder="to do" onChange={this.addItem}></input>
            <button type="submit">Commit to the thing!</button>
            <button>Clear all!</button>
        </div>
      </div>
    );
  }
}

export default App;
