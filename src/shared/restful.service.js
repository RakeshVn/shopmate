export function get(url) {
    return fetch(url)
}

export function post(url, body = {}) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}

export function getAuth(url) {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            headers: {
                'user-key': localStorage.getItem('accessToken')
            }
        }
    })
}

export function postAuth(url, body = {}) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            headers: {
                'user-key': localStorage.getItem('accessToken')
            }
        },
        body: JSON.stringify(body)
    })
}