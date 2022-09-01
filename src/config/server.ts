import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { BugLaucher } from '../middlewares/errors'
import { routes } from '../routes'

// Created server
const app = express()

// Set Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))
app.use('/', routes)
app.use(BugLaucher)

export { app }
