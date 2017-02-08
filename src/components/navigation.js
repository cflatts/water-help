import React, {Component} from 'react'
import NavLink from './NavLink'

class Navigation extends Component {
    render() {
        return (
            <div className = 'navigation'>
                <NavLink to = '/'>Home</NavLink>
                <NavLink to = '/graph'>Water Goals</NavLink>
                <NavLink to = '/login'>Login</NavLink>

            </div>
        )
    }
}

export default Navigation
