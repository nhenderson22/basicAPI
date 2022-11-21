import { Request, Response } from "express";
import {pool} from '../index';
import Logging from "../library/Logging";
import {thread} from '../models/thread';

const getThread = async (req:Request, res:Response) =>{
    const thread = req.params.tID;
    try{
        const result = await(pool.query(`SELECT * FROM threads WHERE thread_id = ${thread};`))
        res.status(200).json(result.rows)
    } catch (err){
        res.status(400).json(err)
    }
}

const createThread = (req:Request, res:Response) => {
    try{
        const thread:thread = req.body;
        pool.query(`INSERT INTO threads (name) VALUES ('${thread.name}')`);
        res.status(200).end()
    }catch(err){
        Logging.log(err);
        res.status(400).end();
    }
   
}
const getAll = async(req:Request, res:Response, ) =>{
    try{
        const allThreads = await (pool.query(`SELECT * FROM threads`));
        res.status(200).json(allThreads.rows);
    }catch(err){
        res.status(400).end();
    }
}
const deleteThread = async(req:Request,res:Response) =>{
    const id = req.params.tID;
    try{
        await(pool.query(`DELETE FROM threads WHERE thread_id = ${id};`));
        res.status(200).end();

    }catch(err){
        Logging.log(err);
        res.status(404).end();
    }
}
// Get all posts from a specific thread
const getAllByPost = async(req:Request,res:Response)=>{
    const post = req.params.tID;
    try{
        const posts = await (pool.query(`SELECT * FROM posts WHERE thread_id = ${post};`));
        res.status(200).json(posts.rows);
    } catch (err){
        Logging.error(err);
        res.status(404).end();
    }
}

export default { getThread, createThread, getAll, deleteThread, getAllByPost}