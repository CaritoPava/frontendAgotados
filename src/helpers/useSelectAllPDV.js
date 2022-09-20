import { useState } from "react"

const useSelectAllPDV = (e) => {

  console.log(e)
  const [viewAllPDV, setViewAllPDV] = useState(false)

  if (e) {
    console.log('true')
  }
  return { viewAllPDV, setViewAllPDV }
}

export default useSelectAllPDV
