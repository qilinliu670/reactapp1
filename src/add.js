import { Component } from 'react'
import axios from 'axios'

class Add extends Component {
    getName = (event) => {
        this.name = event.target.value
    }
    getDescription = (event) => {
        this.description = event.target.value
    }
    add = () => {
        axios({
            method: 'post',
            url: 'http://localhost:4000/courses',
            data: {name: this.name, description: this.description}
        })
    }
    render() {
        return (
            <div>
                course name:
                <input onChange={this.getName}></input><br/>
                course description:
                <input onChange={this.getDescription}></input><br/>
                <button onClick={this.add}>add</button>
            </div>
        )
    }
}

export default Add