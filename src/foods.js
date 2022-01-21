import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

class Foods extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_FOODS'
        })
    }

    render() {
        return (<div>
            {this.props.foods.map((each) => {
                return <div key={each.id}><Link to={`/details/${each.id}`}>{each.name}</Link><br/></div>
            })}
        </div>)
    }
}

export default connect((state, props) => {
    return {
        foods: state['foods'] || []
    }
})(Foods)