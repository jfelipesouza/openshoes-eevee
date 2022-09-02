import axios from 'axios'
import { Request, Response, Router } from 'express'

const productsRouter = Router()
const baseUrl = process.env.BASE_URL_API_PRODUCTS + '/products'

productsRouter.get('/', async (req: Request, res: Response) => {
  const productsList = await axios.get(baseUrl)
  return res.status(200).send({
    products: productsList.data
  })
})

productsRouter.post('/', async (req: Request, res: Response) => {
  const { category, image, logistCode, model, price, size } = req.body
  const body = {
    category,
    image,
    logistCode,
    model,
    price,
    size
  }

  const product = await axios.post(baseUrl, body)

  return res.status(200).send({
    product: product.data
  })
})
productsRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const productsList = await axios.get(baseUrl + `/${id}`)
  return res.status(200).send({
    products: productsList.data
  })
})

productsRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const { category, image, logistCode, model, price, size } = req.body
  const body = {
    category,
    image,
    logistCode,
    model,
    price,
    size,
    id
  }

  const productsList = await axios.put(baseUrl + `/${id}`, body)
  return res.status(200).send({
    products: productsList.data
  })
})

productsRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  await axios.delete(baseUrl + `/${id}`)
  return res.status(200).send({ message: 'Deletado com sucesso' })
})

productsRouter.get('/infinity/scroll', async (req: Request, res: Response) => {
  const { limit } = req.query
  const productsList = await axios.get(baseUrl + `?limit=${limit}`)
  const products = productsList.data
  return res.status(200).send({
    products
  })
})

productsRouter.get('/logist/:code', async (req: Request, res: Response) => {
  const { code } = req.params
  const productsList = await axios.get(baseUrl + `/logist/${code}`)
  const products = productsList.data
  return res.status(200).send({
    products
  })
})

productsRouter.get('/model/:model', async (req: Request, res: Response) => {
  const { model } = req.params
  const productsList = await axios.get(baseUrl + `/model/${model}`)
  const products = productsList.data
  return res.status(200).send({
    products
  })
})

productsRouter.get('/type/:type', async (req: Request, res: Response) => {
  const { type } = req.params
  const productsList = await axios.get(baseUrl + `/type/${type}`)
  const products = productsList.data
  return res.status(200).send({
    products
  })
})

export { productsRouter }
