import { status_code } from '../enums/status.js';
import { Request, Response } from 'express';
import { InfoBook } from '../protocols/types.js';
import { createBook, selectBook } from '../repositories/authRepositories.js'

async function bookPost(req:Request, res: Response) {
    const { name, image, author, genreId, statusId } = req.body as InfoBook;

    try {
        await createBook({name, image, author, genreId, statusId});

        res.sendStatus(status_code.created);
    } catch (error) {
        res.status(status_code.server_error).send(error.message);
    }
}

async function bookGet(req: Request, res: Response) {
    try {
        const book = await selectBook();

        res.send(book.rows);
    } catch (error) {
        res.status(status_code.server_error).send(error.message);
    }
}

export { bookPost, bookGet };