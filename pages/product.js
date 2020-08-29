import React from 'react'
import axios from 'axios'

Product.getInitialProps = async ({ query: { _id } }) => {
  const url = 'http://localhost:3000/api/product'
  const payload = { params: { _id } }
  const response = await axios.get(url, payload)
  return { product: response.data }
}

function Product({ product }) {
  console.log({ product })
  return <>product</>
}

export default Product
