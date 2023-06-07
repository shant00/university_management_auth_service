import express from 'express'

import validateRequest from '../../middlewares/validateRequest'
import { createNewUser } from './user.controller'
import { UserValidation } from './user.validator'

const router = express.Router()

router.post(
  `/create-user`,
  validateRequest(UserValidation.createUserZodSchema),
  createNewUser
)

export default router
