import axios from 'axios'
import { Component } from 'react'
import { connect } from 'react-redux'

class Display extends Component {
    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:4000/courses'
        }).then((response) => {
            this.props.dispatch({
                type: 'STORE_COURSES',
                payload: response.data
            })
        })
    }

    render() {
        return (
            <div>
                {this.props.courses.map((each, index) => {
                    return <div key={index}>
                        name: {each.name}, description: {each.description}
                        <br/>
                    </div>
                })}
            </div>
        )
    }
}

export default connect((state, props) => {
    return {
        courses: state['courses'] || []
    }
})(Display)