import { Router, Request, Response } from 'express'
import multer from 'multer'
import { IImageFile } from '../../@types/interfaces/image'
import { multerStorage } from '../../middlewares/multer'

const imageRoutes = Router()

imageRoutes.post(
  '/upload',
  multer({ storage: multerStorage }).single('file'),
  async (req: Request, res: Response) => {
    const { url } = req.file as IImageFile
    return res.status(200).send({
      imageUrl: url
    })
  }
)

export { imageRoutes }
