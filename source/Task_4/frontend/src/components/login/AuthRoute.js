import React from 'react'
import Component from "../../extensions/Component"
import { Route } from 'react-router-dom'
import LoginPage from "./LoginPage"

class AuthRoute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            path: props.path,
            component: props.component
        }
    }

    render () {
        return <Route path={this.state.path} render={() => (
            sessionStorage.getItem('token') != null ? (
                <this.state.component/>
            ) : (
                <div>
                    <LoginPage/>
                    <hr/>
                    <p style={{color: "red"}}>You need to log in first to see this page!</p>
                </div>
            )
        )}/>
    }
}

export default AuthRoute