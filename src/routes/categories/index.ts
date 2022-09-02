import { Request, Response, Router } from 'express'
import axios from 'axios'

const categoryRoutes = Router()

const baseUrl = process.env.BASE_URL_API_PRODUCTS + '/categories'

categoryRoutes.get('/', async (req: Request, res: Response) => {
  const categoriesArray = await axios.get(baseUrl)

  return res.status(200).send({
    categories: categoriesArray.data
  })
})

categoryRoutes.get('/:id', async (req: Request, res: Response) => {
  const id = req.params
  const categoriesArray = await axios.get(baseUrl + `${id}`)

  return res.status(200).send({
    categories: categoriesArray.data
  })
})
categoryRoutes.post('/', async (req: Request, res: Response) => {
  const { type } = req.body

  const category = await axios.post(baseUrl, { type })

  return res.status(200).send({
    category: category.data
  })
})

categoryRoutes.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const { type } = req.body
  const category = await axios.put(baseUrl + `/${id}`, {
    type,
    id
  })

  return res.status(200).send({
    category: category.data
  })
})

categoryRoutes.delete('/:idCategory', async (req: Request, res: Response) => {
  const { idCategory } = req.params
  await axios.delete(baseUrl + `/${idCategory}`)
  return res.status(200).send({
    message: 'Deletado com sucesso'
  })
})

export { categoryRoutes }
