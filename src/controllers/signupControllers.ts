import bcrypt from 'bcrypt';
import { status_code } from '../enums/status.js';
import { createUser,checkEmail } from '../repositories/authRepositories.js';
import { Request, Response } from 'express';
import { InfoSignUp } from '../protocols/types.js';

async function signupPost(req: Request, res: Response) {
    const { name, image, email, password } = req.body as InfoSignUp;

    try {

        const emailExist = await checkEmail(email);

        if((emailExist.rows).length) {
            res.status(status_code.conflict).send({
                "message": "Esse endereço de email já está cadastrado!"
            });
            return;
        }

        const excrypetPassword = await bcrypt.hash(password, 12);

        await createUser({name, image, email, password: excrypetPassword});

        res.sendStatus(status_code.created);

    } catch (error) {

        res.status(status_code.server_error).send(error.message);

    }
}

export { signupPost };
