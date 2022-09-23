export const deleteBreakfast = (products) => {
  console.log(products, 'products')
  const newProducts = products
  const productsToDelete = newProducts.filter(product => product.breakfast === true)

  productsToDelete.forEach(product => {
    const index = newProducts.indexOf(product)
    newProducts.splice(index, 1)
  }
  )
  console.log(newProducts, "newProducts")

  return newProducts
}