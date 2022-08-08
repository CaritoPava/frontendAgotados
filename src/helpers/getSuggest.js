import axios from 'axios'

export const getSuggest = async () => {
  const urlSuggest = 'http://3.93.184.201:8080/api/suggest'

  const { data } = await axios.get(urlSuggest)
  const { message } = await data

  return message
}