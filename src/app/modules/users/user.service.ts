import config from '../../../config/index'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateStudentId } from './user.utils'

const createStudent = async (user: IUser): Promise<IUser | null> => {
  const id = await generateStudentId()
  user.id = id
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Error creating user')
  }
  return createdUser
}
export default { createStudent }
