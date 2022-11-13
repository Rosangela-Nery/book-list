import { QueryResult } from 'pg';
import { connection } from '../database/database.js';
import { InfoSignUp, TypeStatus, TypeGenre, InfoBook, TypeId } from '../protocols/types.js';

async function createUser(info: InfoSignUp): Promise<QueryResult<InfoSignUp>> {

    return connection.query(
        `INSERT INTO 
            users (name, image, email, password)
        VALUES ($1, $2, $3, $4);`,
        [info.name, info.image, info.email, info.excrypetPassword]
    );
}

async function checkEmail(email: string): Promise<QueryResult<InfoSignUp>> {

    return connection.query(
        `SELECT * FROM 
            users 
        WHERE email=($1)
        LIMIT 1;`,
        [email]
    );
}

async function loginUser(emailExist: any, token: string): Promise<QueryResult<InfoSignUp>> {
    return connection.query(
        `INSERT INTO
            sessions ("userId", token)
        VALUES ($1, $2);`,
        [emailExist.rows[0]?.id, token]
    );
}

async function authenticatedToken(token: string): Promise<QueryResult<InfoSignUp>> {

    return connection.query(
        `SELECT * FROM 
            sessions
        WHERE token = $1;`,
        [token]
    );
}

async function getUserData(email: string): Promise<QueryResult<InfoSignUp>> {
    return connection.query(`SELECT name, image, id AS "userId" FROM users WHERE email=($1);`, [email]);
}

async function createGenre(genre: string): Promise<QueryResult<TypeGenre>> {

    return connection.query(
        `INSERT INTO 
            "bookGenre" (genre)
        VALUES ($1);`,
        [genre]
    );
}

async function selectGenre(): Promise<QueryResult<TypeGenre>> {

    return connection.query(
        `SELECT * FROM  
            "bookGenre";`
    );
}

async function createStatus(status: string): Promise<QueryResult<TypeStatus>> {

    return connection.query(
        `INSERT INTO 
            status (status)
        VALUES ($1);`,
        [status]
    );
}

async function selectStatus(): Promise<QueryResult<TypeStatus>> {

    return connection.query(
        `SELECT * FROM  
            status;`
    );
}

//createBook, selectBook
async function createBook(info: InfoBook): Promise<QueryResult<InfoBook>> {

    return connection.query(
        `INSERT INTO 
            book (name, image, author, "genreId", "statusId")
        VALUES ($1, $2, $3, $4, $5);`,
        [info.name, info.image, info.author, info.genreId, info.statusId]
    );
}

async function selectBook(): Promise<QueryResult<InfoBook>> {

    return connection.query(
        `SELECT book.id, book.name, book.image, book.author, "bookGenre".genre AS genre, status.status AS status 
        FROM
            book
        INNER JOIN 
            "bookGenre" ON book."genreId" = "bookGenre".id
        INNER JOIN 
            status ON book."statusId" = status.id
        ORDER BY book.id ASC;`
    );
}

async function updateStatusBook(id: number, statusId: number):  Promise<QueryResult<InfoBook>> {
    return connection.query(
        `UPDATE 
            book
        SET "statusId" = $2
        WHERE id = $1;`,
        [id, statusId]
    );
}

async function deleteBook(info: TypeId): Promise<QueryResult<TypeId>> {
    return connection.query(
        `DELETE FROM book
        WHERE id = ($1);`,
        [info.id]
    );
}

export  { 
    createUser, 
    checkEmail, 
    loginUser, 
    authenticatedToken, 
    getUserData, 
    createGenre,
    selectGenre,
    createStatus,
    selectStatus,
    createBook,
    selectBook,
    deleteBook,
    updateStatusBook
};