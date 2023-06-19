import express from 'express'

import validateRequest from '../../middlewares/validateRequest'
import { UserController } from './user.controller'
import { UserValidation } from './user.validator'

const router = express.Router()

router.post(
  `/create-student`,
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createStudent
)

export default router
