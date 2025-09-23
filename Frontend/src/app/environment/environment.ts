export const environment = {
    production: false,
    apiUrl: 'http://localhost:8081'
}


export const API_ENDPOINTS = {
    BOOKS: `${environment.apiUrl}/books`,
    AUTHORS: `${environment.apiUrl}/authors`,
    LITERARYGENRES: `${environment.apiUrl}/literary-genres`,
    AUTH: `${environment.apiUrl}/auth`,
    USERS: `${environment.apiUrl}/users`
}

