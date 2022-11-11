import joi from 'joi';
import { status_code } from '../enums/status.js';
import { Request, Response, NextFunction } from 'express';
import { InfoSignUp, TypeStatus, InfoBook } from '../protocols/types.js';

const urlRegex = new RegExp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$');

const signUpSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().regex(urlRegex).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref('password'),
});

const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});

export function validationSignUp(req: Request, res: Response, next: NextFunction) {
    const validation = signUpSchema.validate(req.body as InfoSignUp, {
        abortEarly: true,
    });

    if(!!validation.error) {
        return res.status(status_code.unprocessable_entity).send(validation.error.message);
    }

    next();
}

export function validationSignIn(req: Request, res: Response, next: NextFunction) {
    const validation = signInSchema.validate(req.body as InfoSignUp, {
        abortEarly: true,
    });

    if(!!validation.error) {
        return res.status(status_code.unprocessable_entity).send(validation.error.message);
    }

    next();
}

const genreSchema = joi.object({
    genre: joi.string().min(2).required(),
});

export function validationGenre(req: Request, res: Response, next: NextFunction){
    const validation = genreSchema.validate(req.body as InfoBook, {
        abortEarly: true,
    });

    if(!!validation.error) {
        return res.status(status_code.unprocessable_entity).send(validation.error.message);
    }

    next();
}

const statusSchema = joi.object({
    status: joi.string().min(2).required(),
});

export function validationStatus(req: Request, res: Response, next: NextFunction){
    const validation = statusSchema.validate(req.body as TypeStatus, {
        abortEarly: true,
    });

    if(!!validation.error) {
        return res.status(status_code.unprocessable_entity).send(validation.error.message);
    }

    next();
}


const bookSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().regex(urlRegex).required(),
    author: joi.string().required(),
    genreId: joi.number().required(),
    statusId: joi.number().required(),
});

export function validationBook(req: Request, res: Response, next: NextFunction){
    const validation = bookSchema.validate(req.body as InfoBook, {
        abortEarly: true,
    });

    if(!!validation.error) {
        return res.status(status_code.unprocessable_entity).send(validation.error.message);
    }

    next();
}