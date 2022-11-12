export type InfoSignUp = {
    name: string,
    image: string, 
    email: string, 
    password: string,
    excrypetPassword?: string,
    emailExist?: boolean,
    token?: string,
}

export type TypeStatus = {
    status: string,
}

export type TypeGenre = {
    genre: string,
}

export type InfoBook = {
    name: string,
    image: string,
    author: string,
    genreId: number,
    statusId: number,
}

export type TypeId = {
    id: number,
}