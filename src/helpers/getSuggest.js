import axios from 'axios'

export const getSuggest = async () => {
  const urlSuggest = process.env.REACT_APP_URL_API_SUGGEST || 'localhost:8080'

  const { data } = await axios.get(urlSuggest)
  const { message } = await data

  return message
}