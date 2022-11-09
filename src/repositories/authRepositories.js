import connection from '../database/database.js';

function createUser(name, image, email, excrypetPassword) {

    return connection.query(
        `INSERT INTO 
            users (name, image, email, "excrypetPassword")
        VALUES ($1, $2, $3, $4);`,
        [name, image, email, excrypetPassword]
    );
}

function checkEmail(email) {

    return connection.query(
        `SELECT * FROM 
            users 
        WHERE email=($1)
        LIMIT 1;`,
        [email]
    );
}

function loginUser(emailExist, token) {
    return connection.query(
        `INSERT INTO
            sessions ("userId", token)
        VALUES ($1, $2);`,
        [emailExist.rows[0]?.id, token]
    );
}

function authenticatedToken(token) {

    return connection.query(
        `SELECT * FROM 
            sessions
        WHERE token = $1;`,
        [token]
    );
}

async function getUserData(email) {
    return connection.query(`SELECT username, image, id AS "userId" FROM users WHERE email=($1);`, [email]);
}


export  { createUser, checkEmail, loginUser, authenticatedToken, getUserData };