import axios from 'axios'
import data from '../data/token2.json'
import { PRODUCTS_URL } from '../constants'
/* eslint semi: ["error", "never"] */

const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${data.token}`,
}

const idArr: number[] = []

describe('Categories', () => {
  let arrCategories: string[] = []
  test('get all categories', async () => {
    const getAllCategories = await axios.get(`${PRODUCTS_URL}/categories`, {
      headers: HEADERS,
    })
    expect(getAllCategories.status).toEqual(200)
    arrCategories = getAllCategories.data
  })

  test('get category by id', async () => {
    // iterate all categories received in request above
    for (let i = 0; i < arrCategories.length; i++) {
      const category = arrCategories[i]
      const getSpecificCategory = await axios.get(
        `${PRODUCTS_URL}/category/${category}`,
      )
      expect(getSpecificCategory.status).toEqual(200)
    }
  }, 30000)

  test('create new product for smartphones category', async () => {
    const categorySmartphones = arrCategories[0]
    const createProduct = await axios.post(
      `${PRODUCTS_URL}/add`,
      {
        title: 'Zoho MK121',
        category: `${categorySmartphones}`,
      },
      {
        headers: HEADERS,
      },
    )
    expect(createProduct.status).toEqual(201)
    idArr.push(Number(createProduct.data.id))
  })

  test('create new product for laptops category', async () => {
    const categoryLaptops = arrCategories[1]
    const createProduct = await axios.post(
      `${PRODUCTS_URL}/add`,
      {
        title: 'Kenovo L21',
        category: `${categoryLaptops}`,
      },
      {
        headers: HEADERS,
      },
    )
    expect(createProduct.status).toEqual(201)
    idArr.push(Number(createProduct.data.id))
  })

  test('update a product', async () => {
    const productId = 1 // Example product ID
    const updateProduct = await axios.put(
      `${PRODUCTS_URL}/${productId}`,
      {
        title: 'Updated Product Title',
      },
      {
        headers: HEADERS,
      },
    )
    expect(updateProduct.status).toEqual(200)
  })

  test('delete products', async () => {
    for (const productId of idArr) {
      try {
        const deleteProduct = await axios.delete(`${PRODUCTS_URL}/${productId}`)
        expect(deleteProduct.status).toEqual(200)
        console.log(deleteProduct.status)
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          console.log(`Product with ID ${productId} not found (404)`)
        } else {
          throw error
        }
      }
    }
  })
})
