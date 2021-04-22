export default class UserManagement {
    constructor(baseUrl) {
        if (process.env.NODE_ENV === 'development') {
            baseUrl = "https://localHost:5000/"
        } else {
            baseUrl = "https://smart-sun-app.herokuapp.com/"
        }
        this._baseUrl = baseUrl;
    }
    register(email, password, name) {
        fetch(`${this._baseUrl}signup`, {
            method: "POST",
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password, name })
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } return Promise.reject('Error!' + response.status + response.statusText)
            })
            .then((res) => { return res })

    };

    signIn(email, password) {
        fetch(`${this._baseUrl}login`, {
            method: "POST",
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } return Promise.reject('Error!' + response.status + response.statusText)
            })
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('jwt', data.token);
                    return data;
                }
            })
    };

    checkToken(token) {
        fetch(`${this._baseUrl}users/me`, {
            method: "GET",
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } return Promise.reject('Error!' + response.status + response.statusText)
            })
            .then((res) => { return res })

    };
    updateAvatar(avatar) {
        fetch(`${this._baseUrl}users/me/avatar`, {
            method: "PATCH",
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ avatar })
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } return Promise.reject('Error!' + response.status + response.statusText)
            })
            .then((res) => { return res })
    };
}
