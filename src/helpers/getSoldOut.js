import axios from 'axios'

export const getSoldOut = async () => {
  const urlSoldOut = 'http://44.208.37.247:8080/api/soldout'

  const { data } = await axios.get(urlSoldOut)
  const response = await data.message

  return response
}