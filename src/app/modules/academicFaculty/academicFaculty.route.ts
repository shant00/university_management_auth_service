import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicFacultyController } from './academicSemester.controller'
import { AcademicFacultyValidation } from './academicSemester.validation'
const router = express.Router()
router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
  AcademicFacultyController.createFaculty
)

router.get('/:id', AcademicFacultyController.getSingleFaculty)

router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateFacultyZodSchema),
  AcademicFacultyController.updateFaculty
)

router.delete('/:id', AcademicFacultyController.deleteFaculty)

router.get('/', AcademicFacultyController.getAllFaculties)

export const AcademicFacultyRoutes = router
