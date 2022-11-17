import prisma from '../database/database.js';
import { InfoSignUp, TypeStatus, TypeGenre, InfoBook, TypeId } from '../protocols/types.js';

async function createUser(info: InfoSignUp) {
//INSERT
    return prisma.users.create({
        data: info
    });
}

async function checkEmail(email: string) {
//SELECT users
    return prisma.users.findUnique({
        where: {
            email: email
        }
    });
}

async function loginUser(emailExist: any, token: string) {
//INSERT sessions
    return [];
}

async function authenticatedToken(token: string) {
//SELECT sessions
    return prisma.sessions.findFirst({
        where: {
            token: token
        }
    });
}

async function getUserData(email: string) {
//SELECT users
    return prisma.users.findMany();
}

async function createGenre(genre: TypeGenre) {
//INSERT bookGenre
    return prisma.bookGenre.create({
        data: genre
    });
}

async function selectGenre() {
// SELECT bookGenre
    return prisma.bookGenre.findMany();
}

async function createStatus(status: TypeStatus) {
// INSERT status
    return prisma.status.create({
        data: status
    });
}

async function selectStatus() {
//SELECT status
    return prisma.status.findMany();
}

//createBook, selectBook
async function createBook(info: InfoBook) {
// INSERT book
    return [];
}

async function selectBook() {
//SELECT book;
    return prisma.book.findMany();
}

async function updateStatusBook(id: number, statusId: number) {
//UPDATE book
    return [];
}

async function deleteBook(info: TypeId) {
//DELETE book
    return [];
}

export  { 
    createUser, 
    checkEmail, 
    loginUser, 
    authenticatedToken, 
    getUserData, 
    createGenre,
    selectGenre,
    createStatus,
    selectStatus,
    createBook,
    selectBook,
    deleteBook,
    updateStatusBook
};