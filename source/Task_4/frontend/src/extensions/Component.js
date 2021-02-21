import React from 'react'
import App from "../App";

class Component extends React.Component {
    constructor (props) {
        super(props)
    }

    rerender() {
        this.setState({ state: this.state })
    }

    rerenderAll() {
        Component.rerenderAll()
    }

    static rerenderAll() {
        App.workaround.instance.setState({ state: App.workaround.instance.state })
    }
}

export default Component