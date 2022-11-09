import connection from '../database/database.js';

async function checkEmail(email) {
    const checkEmailUser = await connection.query(
        `SELECT * FROM 
            users 
        WHERE email=($1)
        LIMIT 1;`,
        [email]
    );

    return checkEmailUser;
}

export  { checkEmail}