import express from 'express';
import controller from '../controllers/comments';

const router = express.Router()
// Delete a comment
router.delete('/:cID', controller.deleteComment)
// Create Comments
router.post('',controller.createComment);

export = router;