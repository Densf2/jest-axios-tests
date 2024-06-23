import axios from 'axios'
import data from '../data/token2.json'
/* eslint semi: ["error", "never"] */

describe('Categories', () => {
  let arrCategories: string[] = []
  test('get all products', async () => {
    const getAllCategories = await axios.get(
      'https://dummyjson.com/products/categories',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data.token}`,
        },
      },
    )
    expect(getAllCategories.status).toEqual(200)
    arrCategories = getAllCategories.data
  })

  test('get category by id', async () => {
    // iterate all categories received in request above
    for (let i = 0; i < arrCategories.length; i++) {
      const id = [i]
      const category = arrCategories[i]
      const getSpecificCategory = await axios.get(
        `https://dummyjson.com/products/category/${category}`,
      )
      expect(getSpecificCategory.status).toEqual(200)
    }
  }, 30000)

  test('create new product for smartphones category', async () => {
    const categorySmartphones = arrCategories[0]
    const create_product = await axios.post(
      'https://dummyjson.com/products/add',
      {
        title: 'Zoho MK121',
        category: `${categorySmartphones}`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data.token}`,
        },
      },
    )
  })

  test('create new product for laptops category', async () => {
    const categoryLaptops = arrCategories[1]
    const create_product = await axios.post(
      'https://dummyjson.com/products/add',
      {
        title: 'Kenovo L21',
        category: `${categoryLaptops}`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data.token}`,
        },
      },
    )
  })
})
