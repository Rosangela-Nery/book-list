/*
Aqui vou criar meus types criados por mim mesma.
E cada função posso usar um parametro do tipo que eu quero.
ex: 
export type Job = {
    id?: number,
    title: string
}

Para importar para outro arquivo > import { Job } from '../protocols/Job.js';

function insert(job: Job) {
    Se eu quiser usar essa função, tenho que serguir a regra;
} 
*/ 

export type InfoSignUp = {
    name: string,
    image: string, 
    email: string, 
    password: string
}