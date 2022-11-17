import { status_code } from '../enums/status.js';
import { Request, Response } from 'express';
import { TypeGenre } from '../protocols/types.js';
import { createGenre, selectGenre } from '../repositories/authRepositories.js'

async function genreBookPost(req:Request, res: Response) {
    const { genre } = req.body as TypeGenre;

    try {
        await createGenre({genre});

        res.sendStatus(status_code.created);
    } catch (error) {
        res.status(status_code.server_error).send(error.message);
    }
}

async function genreBookGet(req: Request, res: Response) {
    try {
        const genres = await selectGenre();

        res.send(genres);
    } catch (error) {
        res.status(status_code.server_error).send(error.message);
    }
}

export { genreBookPost, genreBookGet };