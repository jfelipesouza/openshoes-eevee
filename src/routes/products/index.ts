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
  const product = {
    category,
    image,
    logistCode,
    model,
    price,
    size
  }
  console.log(product)
  const productResponse = await axios.post(baseUrl, product)
  return res.status(200).send({
    product: productResponse.data
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
  const { category, image, logistCode, model, price, size, available } =
    req.body

  const productsList = await axios.put(baseUrl + `/${id}`, {
    id,
    category,
    image,
    logistCode,
    model,
    price,
    size,
    available
  })
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
  console.log(code)
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

productsRouter.get('/focus/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const productsList = await axios.get(baseUrl + `/${id}`)
  const product = productsList.data
  const store = await axios.get(
    process.env.BASE_URL_API_USERS + `/user/store/${product.logistCode}`
  )
  return res.send({
    ...product,
    stote: {
      ...store.data
    }
  })
})

export { productsRouter }
