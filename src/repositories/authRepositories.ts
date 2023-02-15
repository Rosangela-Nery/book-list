import prisma from '../database/database.js';
import { InfoSignUp, TypeStatus, TypeGenre, InfoBook, TypeId } from '../protocols/types.js';

async function createUser(info: InfoSignUp) {
    return prisma.users.create({
        data: info
    });
}

async function checkEmail(email: string) {
    return prisma.users.findUnique({
        where: {
            email: email
        }
    });
}

async function loginUser(emailExist: any, token: string) {
    return [];
}

async function authenticatedToken(token: string) {
    return prisma.sessions.findFirst({
        where: {
            token: token
        }
    });
}

async function getUserData(email: string) {
    return prisma.users.findMany();
}

async function createGenre(genre: TypeGenre) {
    return prisma.bookGenre.create({
        data: genre
    });
}

async function selectGenre() {
    return prisma.bookGenre.findMany();
}

async function createStatus(status: TypeStatus) {
    return prisma.status.create({
        data: status
    });
}

async function selectStatus() {
    return prisma.status.findMany();
}

async function createBook(info: InfoBook) {
    return prisma.book.create({
        data: info
    });
}

async function selectBook() {
    return prisma.book.findMany({
        include: {
            bookGenre: true
        }
    });
}

async function updateStatusBook(id: number, statusId: number) {
    return prisma.book.update({
        where : {
            id: Number(id) || 0,
        },
        data: {
            statusId: statusId,
        }
    });
}

async function deleteBook(id: number) {
    return prisma.book.delete({
        where: {
            id: Number(id),
        },
    });
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