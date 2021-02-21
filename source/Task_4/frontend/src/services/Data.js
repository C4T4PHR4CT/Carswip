import Component from "../extensions/Component"

const baseURL = 'http://localhost:3001'

class Data {
    static getToken = (username, password) => {
        return fetch(baseURL + '/token', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            }
        }).then(response => checkStatus(response)).then(response => response.json())
    }

    static getAllItems = () => {
        return fetch(baseURL + '/item', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        }).then(response => checkStatus(response)).then(response => response.json())
    }

    static getItemById = (id) => {
        return fetch(baseURL + '/item/' + id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        }).then(response => checkStatus(response)).then(response => response.json())
    }

    static submitSelection = (selection) => {
        return fetch(baseURL + '/selection', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            },
            body: JSON.stringify(selection)
        }).then(response => checkStatus(response))
    }
}

const checkStatus = (response) => {
    if (response.status >= 400 && response.status < 500) {
        sessionStorage.removeItem('token')
        Component.rerenderAll()
    }
    return response
}

export default Data