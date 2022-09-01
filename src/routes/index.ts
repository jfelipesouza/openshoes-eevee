import { Request, Response, Router } from 'express'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Hello! This is ok',
    port: process.env.PORT
  })
})

export { routes }
