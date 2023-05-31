import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import useRouter from './app/modules/users/user.routes'
const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/users', useRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('API is running')
})

/**
 NODE_ENV=development
PORT=8000
DATABASE_URL=mongodb+srv://university_mangement:LUrZcjD9LeajLEwW@cluster0.med0q.mongodb.net/univery-management?retryWrites=true&w=majority
 */
export default app
