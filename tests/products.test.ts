import { faker } from '@faker-js/faker';
import axios from 'axios';
import data from '../data/token2.json'

describe('dealing with products', () => {
    test('get all products', async() => {
        const get_all_products = await axios.get('https://dummyjson.com/products',
        {headers: {'Content-Type': 'application/json',
                   'Authorization': `Bearer ${data.token}` 
        }})
        expect(get_all_products.status).toEqual(200)
    })

    test('get product by id', async() => {
        let fNumber = faker.number.int({max: 20})
        const get_product_by_id = await axios.get(`https://dummyjson.com/products/${fNumber}`,
        {headers: {'Content-Type': 'application/json',
                   'Authorization': `Bearer ${data.token}` 
        }})
        expect(get_product_by_id.status).toEqual(200)
    })
})