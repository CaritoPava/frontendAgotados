import axios from 'axios'

export const getSoldOut = async () => {
  const urlSoldOut = `${process.env.REACT_APP_URL_API || 'localhost:8080'}/api/soldout`

  const { data } = await axios.get(urlSoldOut)
  const response = await data.message

  return response
}