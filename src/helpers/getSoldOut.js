import axios from 'axios'

export const getSoldOut = async () => {
  const urlSoldOut = process.env.URL_API_SOLDOUT || 'localhost:8080'

  const { data } = await axios.get(urlSoldOut)
  const response = await data.message

  return response
}