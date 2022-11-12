import { status_code } from '../enums/status.js';
import { Request, Response } from 'express';
import { InfoBook, TypeId } from '../protocols/types.js';
import { createBook, selectBook, deleteBook, updateStatusBook } from '../repositories/authRepositories.js'

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

async function bookUpdate(req: Request, res: Response) {
    const { id } = req.params as unknown as TypeId;
    const { statusId } = req.body as InfoBook;

    try {
        await updateStatusBook(id, statusId);

        res.sendStatus(status_code.ok);
        return;
    } catch (error) {
        res.status(status_code.server_error).send(error.message);
    }
}

async function bookDelete(req: Request, res: Response) {
    const { id } = req.params as unknown as TypeId;

    try {
        await deleteBook({id});

        res.sendStatus(status_code.ok);
        return;
    } catch (error) {
        res.status(status_code.server_error).send(error.message);
    }
}

export { bookPost, bookGet, bookDelete, bookUpdate };