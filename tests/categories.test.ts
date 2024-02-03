import axios from 'axios';
import data from '../data/token2.json'
import { writeFile } from 'node:fs/promises'

describe('Categories', () => {
    test('get all products', async() => {
        const get_all_categories = await axios.get('https://dummyjson.com/products/categories',
        {headers: {'Content-Type': 'application/json',
                   'Authorization': `Bearer ${data.token}` 
        }})
        expect(get_all_categories.status).toEqual(200)
        try {
            await writeFile('data/categories.json', JSON.stringify(get_all_categories.data, null, 1))
            console.log('All categories has been saved!')
        } catch (err: any) {
            console.error('issue with saving categories', err.message)
        }
        console.log(JSON.stringify(get_all_categories.data))
    })
})