import { Request, Response } from 'express';
import {comment} from '../models/comments';
import {pool} from '../index';
import Logging from '../library/Logging';

const deleteComment = async(req:Request,res:Response) => {
    const id = req.params.cID;
    try{
        await(pool.query(`DELETE FROM comments WHERE comment_id = ${id};`));
        res.status(200).end()
    }catch(err){
        Logging.error(err);
        res.status(404).end()
    }
}
const createComment =async (req:Request, res:Response) => {
    const comment:comment = req.body;
    try{
        await(pool.query(`INSERT INTO comments(post_id,user_id,parent_comment_id,body) VALUES 
        (${comment.post_id},${comment.user_id},${comment.parent_id},'${comment.body}');`));
        res.status(200).end()
    }catch(err){
        Logging.log(err);
        res.status(400).end();
    }
}

export default { deleteComment, createComment}