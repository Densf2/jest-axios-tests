 import { faker } from '@faker-js/faker'
import axios from 'axios'
import data from '../data/token2.json'
import { BASE_URL } from '../constants'

const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${data.token}`,
}

describe('dealing with products', () => {
  test('get all products', async () => {
    const get_all_products = await axios.get(`${BASE_URL}/products`, {
      headers: HEADERS,
    })
    expect(get_all_products.status).toEqual(200)
  })

  test('get product by id', async () => {
    const fNumber = faker.number.int({ max: 20 })
    const get_product_by_id = await axios.get(
      `${BASE_URL}/products/${fNumber}`,
      {
        headers: HEADERS,
      },
    )
    expect(get_product_by_id.status).toEqual(200)
  })
})
