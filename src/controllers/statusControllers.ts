import { status_code } from '../enums/status.js';
import { Request, Response } from 'express';
import { TypeStatus } from '../protocols/types.js';
import { createStatus, selectStatus } from '../repositories/authRepositories.js'

async function statusBookPost(req:Request, res: Response) {
    const { status } = req.body as TypeStatus;

    try {
        await createStatus(status);

        res.sendStatus(status_code.created);
    } catch (error) {
        res.status(status_code.server_error).send(error.message);
    }
}

async function statusBookGet(req: Request, res: Response) {
    try {
        const genres = await selectStatus();

        res.send(genres.rows);
    } catch (error) {
        res.status(status_code.server_error).send(error.message);
    }
}

export { statusBookPost, statusBookGet };