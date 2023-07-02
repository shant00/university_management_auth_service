import { Model, Types } from 'mongoose'
import { IAdmin } from '../admin/admin.interface'
import { IFaculty } from '../faculty/faculty.interface'
import { IStudent } from '../students/student.Interface'

export type IUser = {
  id: string | undefined
  role: string
  password: string
  student?: Types.ObjectId | IStudent
  faculty?: Types.ObjectId | IFaculty
  admin?: Types.ObjectId | IAdmin
}

export type UserModel = Model<IUser, Record<string, unknown>>
