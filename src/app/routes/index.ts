import express from 'express'
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route'
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route'
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route'
import { AdminRoutes } from '../modules/admin/admin.route'
import { FacultyRoutes } from '../modules/faculty/faculty.route'
import StudentRoutes from '../modules/students/student.route'
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
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
