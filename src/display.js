import axios from 'axios'
import { Component } from 'react'

class Display extends Component {
    constructor() {
        super()
        this.state = {courses: []}
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:4000/courses'
        }).then((response) => {
            this.setState({courses: response.data})
        })
    }

    render() {
        return (
            <div>
                {this.state.courses.map((each, index) => {
                    return <div key={index}>
                        name: {each.name}, description: {each.description}
                        <br/>
                    </div>
                })}
            </div>
        )
    }
}

export default Display