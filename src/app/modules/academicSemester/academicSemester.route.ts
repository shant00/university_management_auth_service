import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicSemesterValidation } from './academicSemester.Validation'
import { AcademicSemesterController } from './academicSemester.controller'
const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
)
router.get('/', AcademicSemesterController.getAllSemesters)
export const AcademicSemesterRoutes = router
