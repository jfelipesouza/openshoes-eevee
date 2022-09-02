export type IImageFile = Express.Multer.File & {
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  name: string
  size: number
  key: string
  url: string
  _id: string
  createAt: string
}
