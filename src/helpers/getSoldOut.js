import axios from 'axios'


export const getSoldOut = async () => {
  // const urlSoldOut = `${process.env.REACT_APP_URL_API || 'localhost:8080'}/api/soldout`
  const urlSoldOut = `http:/3.87.44.241:8080/api/soldout`
  console.log('urlSoldOut', urlSoldOut)

  const { data } = await axios.get(urlSoldOut)
  const response = await data.message

  console.log('response', response)

  return response
}