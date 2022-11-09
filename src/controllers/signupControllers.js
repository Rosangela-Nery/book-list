import bcrypt from 'bcrypt';
import { status_code } from '../enums/status.js';
import { checkEmail } from '../repositories/authRepositories.js';

async function signupPost(req, res) {
    const { name, image, email, password } = req.body;

    try {

        const emailExist = await checkEmail(email);

        if((emailExist.rowa).length) {
            res.status(status_code.conflict).send({
                "message": "Esse endereço de email já está cadastrado!"
            });
            return;
        }

        const excrypetPassword = await bcrypt.hash(password, 12);

        await createUser(name, image, email, excrypetPassword);

        res.sendStatus(status_code.created);

    } catch (error) {

        res.status(status_code.server_error).send(error.message);

    }
}

export { signupPost };
