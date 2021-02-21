import React from 'react'
import Component from "../../extensions/Component"
import Data from './../../services/Data'
import './ItemListPage.css'

class ItemListPage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            selection: [],
            display: [],
            itemsPerPage: 5
        }
        Data.getAllItems().then(response => {
            this.state.items = response
            this.state.maxPage = Math.floor(this.state.items.length / this.state.itemsPerPage) + 1;
            this.state.page = parseInt(new URLSearchParams(window.location.search).get('page'))
            if (isNaN(this.state.page))
                window.location.href = window.location.href.split("?")[0] + '?page=1'
            if (this.state.page > this.state.maxPage)
                window.location.href = window.location.href.split("?")[0] + '?page=' + this.state.maxPage
            if (this.state.page < 1)
                window.location.href = window.location.href.split("?")[0] + '?page=1'
            for (let i = (this.state.page - 1) * this.state.itemsPerPage; i < this.state.page * this.state.itemsPerPage && i < this.state.items.length; i++)
                this.state.display[this.state.display.length] = this.state.items[i];
            let temp = sessionStorage.getItem('selection');
            if (temp != null && temp !== "")
                this.state.selection = JSON.parse(temp);
            else
                sessionStorage.setItem('selection', JSON.stringify(this.state.selection))
            this.rerender()
        })
        this.previousPage = this.previousPage.bind(this)
        this.nextPage = this.nextPage.bind(this)
        this.detailItem = this.detailItem.bind(this)
        this.submitSelection = this.submitSelection.bind(this)
    }

    isSelected (itemId) {
        let contains = false;
        for (let i = 0; i < this.state.selection.length; i++)
            if (this.state.selection[i] === itemId) {
                contains = true
                break
            }
        return contains
    }

    updateSelection (itemId) {
        if (document.getElementById(itemId).checked) {
            let contains = false;
            for (let i = 0; i < this.state.selection.length; i++)
                if (this.state.selection[i] === itemId) {
                    contains = true
                    break
                }
            if (!contains)
                this.state.selection[this.state.selection.length] = itemId
        } else {
            for (let i = 0; i < this.state.selection.length; i++)
                if (this.state.selection[i] === itemId) {
                    let temp = []
                    for (let j = 0; j < this.state.selection.length; j++)
                        if (j !== i)
                            temp[temp.length] = this.state.selection[j];
                    this.state.selection = temp
                    i--;
                }
        }
        sessionStorage.setItem('selection', JSON.stringify(this.state.selection))
        this.rerender()
    }

    nextPage() {
        window.location.href = window.location.href.split("?")[0] + '?page=' + (this.state.page + 1)
    }

    previousPage() {
        window.location.href = window.location.href.split("?")[0] + '?page=' + (this.state.page - 1)
    }

    detailItem(id) {
        window.location.href = "/item" + '?id=' + id //+ "&page=" + this.state.page
    }

    submitSelection() {
        Data.submitSelection(this.state.selection).then(() => null)
        this.state.selection = []
        sessionStorage.setItem('selection', JSON.stringify(this.state.selection))
        let temp = document.getElementsByClassName("checkbox")
        for (let i = 0; i < temp.length; i++)
            temp[i].checked = false
        this.rerender()
    }

    render () {
        return (
            <div>
                <h1>Item List</h1>
                <h4>Data from: <a href='http://wikiroulette.co' target='_blank'>http://wikiroulette.co</a></h4>
                <form>
                    {this.state.display.map((value, index) =>  {
                        return <div className='item' key={index}>
                            <p onClick={() => this.detailItem(value.id)}>{value.name}</p>
                            <input className="checkbox" type="checkbox" id={value.id} onChange={() => this.updateSelection(value.id)} defaultChecked={this.isSelected(value.id)}/>
                            <label>add to selection</label>
                        </div>
                    })}
                </form>
                <div id='pageNav'>
                    <button disabled={this.state.page <= 1} onClick={this.previousPage}>{'<'}</button>
                    <p>Page {this.state.page}/{this.state.maxPage}</p>
                    <button disabled={this.state.page >= this.state.maxPage} onClick={this.nextPage}>{'>'}</button>
                </div>
                <button id='submit' disabled={this.state.selection.length === 0} onClick={this.submitSelection}>Submit Selection</button>
            </div>
        )
    };
}

export default ItemListPage