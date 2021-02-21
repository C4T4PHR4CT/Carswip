import React from 'react'
import Component from "../../extensions/Component"
import Data from './../../services/Data'

class ItemDetailsPage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            invalid: false
        }

        let id = parseInt(new URLSearchParams(window.location.search).get('id'))
        if (isNaN(id))
            this.state.invalid = true
        else {
            Data.getItemById(id).then(response => {
                this.state.item = response
                if (this.state.item.name == null)
                    this.state.invalid = true
                this.rerender()
            })
        }
    }

    render () {
        if (this.state.invalid)
            return <h3>Sorry, but your princess is in another castle :c</h3>
        else
            return (
                <div>
                    <h1>{this.state.item != null && this.state.item.name}</h1>
                    <p>{this.state.item != null && this.state.item.description}</p>
                </div>
            )
    };
}

export default ItemDetailsPage
