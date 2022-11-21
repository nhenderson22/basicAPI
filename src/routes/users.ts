import express from 'express';
import controller from '../controllers/users'

const router = express.Router()
// Create new user
router.post('',controller.createUser)
router.get('/:uID',controller.getUser)
router.delete('/:uID', controller.deleteUser)

export = router;