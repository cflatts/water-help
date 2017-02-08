import React, {Component} from 'react'
import NavLink from './NavLink'

class Navigation extends Component {
    render() {
        return (
            <div className = 'navigation'>
                <NavLink to  = '/'>Home</NavLink>
            </div>
        )
    }
}
