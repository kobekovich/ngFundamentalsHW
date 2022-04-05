export interface AuthorItem {
    successful: boolean,
    result: Responce[]
}

export interface PostAuthor {
    name: string
}

export interface Responce {
    name: string,
    id: string
}