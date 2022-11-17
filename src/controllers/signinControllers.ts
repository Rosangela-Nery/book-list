import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { status_code } from '../enums/status.js';
import { checkEmail, getUserData, loginUser } from '../repositories/authRepositories.js';
import { Request, Response } from 'express';
import { InfoSignUp } from '../protocols/types.js';

async function loginPost(req: Request, res: Response) {

    const { email, password } = req.body as InfoSignUp;

    try {

        const emailExist = await checkEmail(email);

        if(!emailExist) {
            res.status(status_code.unauthorized).send({
                "message": "Preencha os dados corretamente!"
            });
            return;
        }

        const encrypetPassword = await bcrypt.compare(password, emailExist.password);

        if (!encrypetPassword) {
            res.status(status_code.unauthorized).send({
                "message": "Senha ou usuário inválidos, tente novamente!"
            });
            return;
        }

        const token = uuid();
        await loginUser(emailExist, token);

        res.send({
            token
        })

    } catch (error) {
        res.status(status_code.server_error).send(error.message);
    }
}

export { loginPost };