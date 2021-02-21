import React from 'react'
import Component from "../../extensions/Component"
import './NavBar.css'

class NavBar extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div>
                <div id='spacer'/>
                <div id='navbar'>
                    <button id='home' onClick={this.toHome}>Home</button>
                    {sessionStorage.getItem('token') == null ? (
                        <button id='login' onClick={this.toLogin}>Login</button>
                    ) : (
                        <button id='login' onClick={this.logout}>Logout</button>
                    )}
                    <button id='items' onClick={this.toItems}>Items</button>
                </div>
            </div>
        )
    };

    toHome() {
        window.location.href = "/"
    }

    toLogin() {
        window.location.href = "/login"
    }

    logout() {
        sessionStorage.removeItem('token')
        Component.rerenderAll()
    }

    toItems() {
        //let page = parseInt(new URLSearchParams(window.location.search).get('page'))
        //if (isNaN(page))
        window.location.href = "/items";
        //else
        //    window.location.href = "/items?page=" + page;
    }
}

export default NavBar