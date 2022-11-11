import { connection } from '../database/database.js';
import { InfoSignUp } from '../protocols/types.js';

async function createUser(name: string, image: string, email: string, excrypetPassword: string): Promise<string> {

    return await connection.query(
        `INSERT INTO 
            users (name, image, email, "excrypetPassword")
        VALUES ($1, $2, $3, $4);`,
        [name, image, email, excrypetPassword]
    );
}

async function checkEmail(email: string): Promise<string> {

    return await connection.query(
        `SELECT * FROM 
            users 
        WHERE email=($1)
        LIMIT 1;`,
        [email]
    );
}

async function loginUser(emailExist: any, token: string): Promise<string> {
    return await connection.query(
        `INSERT INTO
            sessions ("userId", token)
        VALUES ($1, $2);`,
        [emailExist.rows[0]?.id, token]
    );
}

async function authenticatedToken(token: string): Promise<string>{

    return await connection.query(
        `SELECT * FROM 
            sessions
        WHERE token = $1;`,
        [token]
    );
}

async function getUserData(email: string): Promise<string> {
    return connection.query(`SELECT username, image, id AS "userId" FROM users WHERE email=($1);`, [email]);
}


export  { createUser, checkEmail, loginUser, authenticatedToken, getUserData };