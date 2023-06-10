import express from 'express'
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route'
import UserRoutes from '../modules/users/user.routes'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
