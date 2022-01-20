import { Component } from 'react'
import { connect } from 'react-redux'
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
        }).then((response) => {
            this.props.dispatch({
                type: 'ADD_COURSE',
                payload: response.data
            })
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

export default connect()(Add)