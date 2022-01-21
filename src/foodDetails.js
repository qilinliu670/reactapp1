import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { useEffect } from 'react'

function FoodDetails(props) {
    var params = useParams()

    useEffect(() => {
        props.dispatch({
            type: 'GET_FOOD_DETAILS',
            payload: params.id
        })
    })

    return (<div>
        name: {props.foodDetails.name}, description: {props.foodDetails.description}
    </div>)
}

export default connect((state, props) => {
    return {
        foodDetails: state['foodDetails'] || []
    }
})(FoodDetails)