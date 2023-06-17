import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import { paginationFields } from '../../../constants/pagination'
import catchAsync from '../../../share/catchAsync'
import pick from '../../../share/pick'
import sendResponse from '../../../share/sendResponse'
import { academicSemesterFilterableFields } from './academicSemester.constant'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemesterService } from './academicSemester.service'

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    )

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully!',
      data: result,
    })
    next()
  }
)

const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicSemesterFilterableFields)
  const paginationOptions = pick(req.query, paginationFields)

  const result = await AcademicSemesterService.getAllSemesters(
    filters,
    paginationOptions
  )

  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semesters retrieved successfully !',
    meta: result.meta,
    data: result.data,
  })
})

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
}
