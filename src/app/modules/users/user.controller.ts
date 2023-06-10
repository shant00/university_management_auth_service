import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../share/catchAsync'
import sendResponse from '../../../share/sendResponse'
import { IUser } from './user.interface'
import { createUser } from './user.service'

export const createNewUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body
    const result = await createUser(user)

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    })
    next()
  }
)
