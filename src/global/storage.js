export function setRestServer(item) {
    localStorage.setItem('REST-SERVER', item)
}

export function getRestServer() {
    return localStorage.getItem('REST-SERVER') || ''
}

export function removeRestServer() {
    localStorage.removeItem('REST-SERVER')
}