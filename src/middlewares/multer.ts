import axios from 'axios'
import FormData from 'form-data'

const baseUrl = process.env.BASE_URL_API_IMAGE + '/upload'

const multerStorage = {
  _handleFile(req, file, cb) {
    const { originalname: filename, stream: readable } = file

    const formData = new FormData()
    formData.append('file', readable, { filename })

    const requestConfig = {
      headers: {
        ...formData.getHeaders()
      },
      maxBodyLength: Infinity
    }

    axios
      .post(baseUrl, formData, requestConfig)
      .then(res => cb(null, res.data))
      .catch(err => cb(err))
  },
  _removeFile() {}
}

export { multerStorage }
