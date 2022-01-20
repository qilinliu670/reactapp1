import { Link } from 'react-router-dom'
import { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">add</Link><br/>
                <Link to="/display">display</Link>
            </nav>
        )
    }
}

export default Navbar