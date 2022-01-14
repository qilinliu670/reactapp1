import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {tasks: []}
  }  

  render() {
    return (
      <div>
        <input id="input"></input>
        <button onClick={() => this.setState({
          tasks: [...this.state.tasks, document.getElementById("input").value]
        })}>submit</button>
        {this.state.tasks.map((task, index) => {
          return <div key={index}>
            <input type="checkbox"></input>
            <label>{task}</label>
          </div>
        })}
      </div>
    );
  }
}

export default App;
