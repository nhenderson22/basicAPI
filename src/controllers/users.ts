import {user} from '../models/users';
import { Request,Response } from 'express';
import {pool} from '../index';
import Logging from '../library/Logging';

const createUser = async(req:Request, res:Response) =>{
    const user:user = req.body;
    try{
        await(pool.query(`INSERT INTO users (username,password) VALUES ('${user.username}','${user.password}');`))
        res.status(200).end()
    } catch(err){
        Logging.error(err);
        res.status(400).end()
    }
}
const getUser = async(req:Request, res:Response) =>{
    const id = req.params.uID;
    try{
        const user = await(pool.query(`SELECT * FROM users WHERE user_id = ${id};`));
        res.status(200).json(user.rows[0])
    } catch(err){
        Logging.log(err);
        res.status(404).end()
    }
}
const deleteUser = async(req:Request,res:Response) =>{
    const id = req.params.uID;
    try{
        await(pool.query(`DELETE FROM users WHERE user_id = ${id};`));
        res.status(200).end()
    }catch(err){
        Logging.error(err);
        res.status(404).end();
    }
}

export default {createUser, getUser, deleteUser}