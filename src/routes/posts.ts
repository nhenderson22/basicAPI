import express from 'express';
import controller from '../controllers/posts';

const router = express.Router();
// Creates a new post based on the object sent to it
router.post('/',controller.createPost);
// Delete the post based on ID
router.delete('/:pID', controller.deletePost);
// Gets a specific post
router.get('/:pID', controller.getPost);
// Get comments by post
router.get('/:pID/comments', controller.getComments);

export = router;