import { Request, Response, Router } from 'express'
import { categoryRoutes } from './categories'
import { imageRoutes } from './image'
import { productsRouter } from './products'
import { userRoutes } from './users'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Hello! This is ok',
    port: process.env.PORT
  })
})

routes.use('/categories', categoryRoutes)
routes.use('/products', productsRouter)
routes.use('/image', imageRoutes)
routes.use('/user', userRoutes)

export { routes }
