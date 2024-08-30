

import express from 'express';
import auth from '../../middlewares/auth';
import { userControllers } from './user.controller';
const router = express.Router();


// get 
router.get('/', auth('admin'),  userControllers.getAllUsers)
router.get('/:email', auth('admin','user'), userControllers.getSingleUser)

router.put('/:id', auth('admin', 'user'), userControllers.updateUser)
router.delete('/:id', auth('admin'), userControllers.deleteUser)


export const UserRoutes = router;