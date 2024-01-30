import axios from 'axios'
import jsonpath from 'jsonpath'
import { writeFile } from 'node:fs/promises'

// list of variables used in the test scenarios
let uname: String
let pass: String
let auth_token: String

describe('getting token', () => {
    test('get list of users', async () => {
        const response = await axios.get('https://dummyjson.com/users', {
            headers: {
                'authority': 'dummyjson.com',
                'referer': 'https://dummyjson.com/docs/auth',
            }
        });
        uname = String(jsonpath.query(response.data, '$.users[25].username'))
        pass = String(jsonpath.query(response.data, '$.users[25].password'))
        // console.log(uname)
        // console.log(pass)
        //await writeFile('response.json', JSON.stringify(response.data), 'utf8', (err) => {
        //    if (err) throw err;
        //    console.log('The file has been saved!')})
    });

    test('get token by user credentials', async () => {
        const token_response = await axios.post('https://dummyjson.com/auth/login',
            {
                'username': uname,
                'password': pass,
            },
            {
                headers: { 'Content-Type': 'application/json' }
            })
        auth_token = String(jsonpath.query(token_response.data, '$..token'))
        try {
            await writeFile('data/token2.json', JSON.stringify(auth_token))
            console.log('The token has been saved!')
        } catch (err: any) {
            console.error('issue with saving token', err.message)
        }
    })
})

