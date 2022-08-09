import axios from 'axios'

export const getSuggest = async () => {
  const urlSuggest = 'http://44.208.37.247:8080/api/suggest'

  const { data } = await axios.get(urlSuggest)
  const { message } = await data

  return message
}