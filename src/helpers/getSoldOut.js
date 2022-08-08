import axios from 'axios'

export const getSoldOut = async () => {
  const urlSoldOut = 'http://3.93.184.201:8080/api/soldout'

  const { data } = await axios.get(urlSoldOut)
  const response = await data.message

  return response
}