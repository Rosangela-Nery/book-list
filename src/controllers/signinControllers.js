import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { status_code } from '../enums/status.js';
import { checkEmail, getUserData, loginUser } from '../repositories/authRepositories.js';

async function loginPost(req, res) {

    const { email, password } = req.body;

    try {

        const emailExist = await checkEmail(email);

        if(!(emailExist.rows).length) {
            res.status(status_code.unauthorized).send({
                "message": "Preencha os dados corretamente!"
            });
            return;
        }

        const encrypetPassword = await bcrypt.compare(password, emailExist.rows[0]?.password);

        if (!encrypetPassword) {
            res.status(status_code.unauthorized).send({
                "message": "Senha ou usuário inválidos, tente novamente!"
            });
            return;
        }

        const userData = (await getUserData(email)).rows[0];

        const token = uuid();
        await loginUser(emailExist, token);

        res.send({
            token,
            ...userData
        })

    } catch (error) {
        res.status(status_code.server_error).send(error.message);
    }
}

export { loginPost };