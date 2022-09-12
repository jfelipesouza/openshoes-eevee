import axios from 'axios'
import { Request, Response, Router } from 'express'

const userRoutes = Router()
const baseURL = process.env.BASE_URL_API_USERS

userRoutes.get('/', async (req, res) => {
  const allUsers = await axios.get(baseURL + '/users')
  return res.status(200).send(allUsers.data)
})

userRoutes.post('/register', async (req: Request, res: Response) => {
  const { email, password, type } = req.body

  if (type === 'logist') {
    const createNewLogist = await axios.post(baseURL + '/user/logist', {
      email,
      password,
      type
    })
    return res.status(200).send({
      user: createNewLogist.data
    })
  }
  if (type === 'client') {
    const createNewClient = await axios.post(baseURL + '/user', {
      email,
      password,
      type
    })
    return res.status(200).send({
      user: createNewClient.data
    })
  }
})

userRoutes.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body
  const userToken = await axios.post(baseURL + '/login', { email, password })

  return res.status(200).send({
    token: userToken.data
  })
})

userRoutes.post('/create/store', async (req: Request, res: Response) => {
  const { address, cnpj, link, store_name, store_type, logist_code } = req.body
  const store = await axios.post(baseURL + '/user/store', {
    address,
    cnpj,
    link,
    store_name,
    store_type,
    logist_code
  })

  return res.status(200).send(store.data)
})
export { userRoutes }
