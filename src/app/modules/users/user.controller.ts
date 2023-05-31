import { Request, Response } from 'express'
import { createUser } from './user.service'

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const result = await createUser(req.body.user)
    res.status(200).json(result)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    } else {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
