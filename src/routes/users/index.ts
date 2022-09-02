import axios from 'axios'
import { Request, Response, Router } from 'express'

const userRoutes = Router()
const baseURL = process.env.BASE_URL_API_USERS

userRoutes.get('/', async (req, res) => {
  const allUsers = await axios.get(baseURL + '/users')
  return res.status(200).send({
    users: allUsers.data
  })
})

userRoutes.post('/register', async (req: Request, res: Response) => {
  const user = req.body

  if (user.type === 'logist') {
    const createNewLogist = await axios.post(baseURL + '/user/logist', user)
    console.log('entrou aqui')
    return res.status(200).send({
      user: createNewLogist.data
    })
  }
  if (user.type === 'client') {
    const createNewClient = await axios.post(baseURL + '/user', {
      email: user.email,
      password: user.password,
      type: user.type
    })
    console.log('Batata')
    return res.status(200).send({
      user: createNewClient.data
    })
  }
})
export { userRoutes }
