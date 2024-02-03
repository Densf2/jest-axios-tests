import axios from 'axios';
import data from '../data/token2.json'

describe('Categories', () => {
    test('get all products', async() => {
        const get_all_categories = await axios.get('https://dummyjson.com/products/categories',
        {headers: {'Content-Type': 'application/json',
                   'Authorization': `Bearer ${data.token}` 
        }})
        expect(get_all_categories.status).toEqual(200)
    })
})