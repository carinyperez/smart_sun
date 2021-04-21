export default class UserManagement {
    register(email, password, name) {
        fetch('https://localHost:5000/signup', {
            method: "POST",
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
        fetch('https://localHost:5000/login', {
            method: "POST",
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
        fetch('https://localHost:5000/users/me', {
            method: "GET",
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
        fetch('https://localHost:5000/users/me/avatar', {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ avatar})
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } return Promise.reject('Error!' + response.status + response.statusText)
            })
            .then((res) => { return res })
    };
}
