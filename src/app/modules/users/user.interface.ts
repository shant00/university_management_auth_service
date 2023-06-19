import { Model, Types } from 'mongoose'
import { IStudent } from '../students/student.Interface'

export type IUser = {
  id: string
  role: string
  password: string
  student?: Types.ObjectId | IStudent
  // faculty?:Types.ObjectId | IFaculty; Future
  // admin?:Types.ObjectId | IAdmin; Future
}

export type UserModel = Model<IUser, Record<string, unknown>>
