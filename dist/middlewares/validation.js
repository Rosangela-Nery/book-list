import joi from 'joi';
import { status_code } from '../enums/status.js';
var urlRegex = new RegExp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$');
var signUpSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().regex(urlRegex).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref('password')
});
var signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});
export function validationSignUp(req, res, next) {
    var validation = signUpSchema.validate(req.body, {
        abortEarly: true
    });
    if (!!validation.error) {
        return res.status(status_code.unprocessable_entity).send(validation.error.message);
    }
    next();
}
export function validationSignIn(req, res, next) {
    var validation = signInSchema.validate(req.body, {
        abortEarly: true
    });
    if (!!validation.error) {
        return res.status(status_code.unprocessable_entity).send(validation.error.message);
    }
    next();
}
var genreSchema = joi.object({
    genre: joi.string().min(2).required()
});
export function validationGenre(req, res, next) {
    var validation = genreSchema.validate(req.body, {
        abortEarly: true
    });
    if (!!validation.error) {
        return res.status(status_code.unprocessable_entity).send(validation.error.message);
    }
    next();
}
var statusSchema = joi.object({
    status: joi.string().min(2).required()
});
export function validationStatus(req, res, next) {
    var validation = statusSchema.validate(req.body, {
        abortEarly: true
    });
    if (!!validation.error) {
        return res.status(status_code.unprocessable_entity).send(validation.error.message);
    }
    next();
}
var bookSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().regex(urlRegex).required(),
    author: joi.string().required(),
    genreId: joi.number().required(),
    statusId: joi.number().required()
});
export function validationBook(req, res, next) {
    var validation = bookSchema.validate(req.body, {
        abortEarly: true
    });
    if (!!validation.error) {
        return res.status(status_code.unprocessable_entity).send(validation.error.message);
    }
    next();
}
