import { status_code } from '../enums/status.js';
import { authenticatedToken } from '../repositories/authRepositories.js';
import { Request, Response, NextFunction } from 'express';

async function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace('Bearer ', '');

    try {

        if(!token) {
            return res.status(status_code.unauthorized).send({
                "message": "Header não enviado ou inválido!;"
            })
        }

        const authenticated = await authenticatedToken(token);

        if(authenticated.rows.length === 0) {
            return res.status(status_code.unauthorized).send({
                "message": "Usuário não autorizado!"
            });
        }

        next();
    } catch (error) {

        res.status(status_code.server_error).send(error.message);

    }
}

export { isAuthenticated };