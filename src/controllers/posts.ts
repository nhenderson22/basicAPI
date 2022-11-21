import { Request, Response } from "express";
import {pool} from '../index';
import Logging from '../library/Logging';
import {post} from '../models/posts'

// Adds a new post to the database based on the given request body
const createPost = async(req:Request,res:Response)=>{
    const newPost:post= req.body;
    try{
        await(pool.query(`INSERT INTO posts (submitter_id,thread_id,title,body) VALUES (${newPost.submitter_id},
            ${newPost.thread_id},'${newPost.title}','${newPost.body}');`));
        res.status(201).end();
    } catch(err){
        res.status(400).json(err);
        Logging.error(err);
    }
}
// Deletes the given post based on the post parameter id
const deletePost =async (req:Request, res:Response) => {
    const postid = req.params.pID;
    try{
        await(pool.query(`DELETE FROM posts WHERE post_id = ${postid};`))
        res.status(204).end()
    }catch(err){
        Logging.error(err);
        res.status(404).json(err);
    }
}
// This will get the specified post based on the url parameter
const getPost = async(req:Request,res:Response)=>{
    const postid = req.params.pID;
    try{
        const post = await (pool.query(`SELECT * FROM posts WHERE post_id = ${postid};`))
        res.status(200).json(post.rows[0])
    } catch(err){
        Logging.error(err);
        res.status(404).json(err)
    }
}
const getComments = async(req:Request,res:Response) => {
    const id = req.params.pID;
    try{
        const comments = await(pool.query(`SELECT * FROM comments WHERE post_id = ${id};`));
        res.status(200).json(comments.rows);
    }catch(err){
        Logging.log(err);
        res.status(404).end();
    }
}




export default {createPost, deletePost, getPost, getComments}