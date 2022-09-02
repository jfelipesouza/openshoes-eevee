import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'
import { BugLaucher } from '../middlewares/errors'
import { routes } from '../routes'
import swaggerDocs from '../../swagger.json'
import { corsConfig } from './cors'

// Created server
const app = express()

// Set Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))
app.use('/', routes)
app.use(BugLaucher)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

export { app }
