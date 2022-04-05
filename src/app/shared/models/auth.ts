export interface Credentials {
    name: string,
    email: string,
    password: string
}

export interface LoginResponce {
    successful: boolean,
    result: string,
    user?: User
}

export interface User {
    email: string,
    name: string,
    password?: string,
    role?: string,
    id?: string
}

export interface UserResponce {
    successful: boolean,
    result: User    
}