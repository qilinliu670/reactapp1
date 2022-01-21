import { Link } from 'react-router-dom'
import { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to='/'>home</Link><br/>
                <Link to='/details/1'>details</Link>
            </nav>
        )
    }
}

export default Navbar