import express from 'express';
import controller from '../controllers/threads';

const router = express.Router();

router.get('/:tID',controller.getThread)
router.get('', controller.getAll)
// Get all posts in a thread
router.get('/:tID/posts',controller.getAllByPost)
router.post('',controller.createThread)
router.delete('/:tID', controller.deleteThread)
export = router;