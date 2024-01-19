import axios from 'axios'
import jsonpath from 'jsonpath'
import { writeFile } from 'node:fs'

let uname: String
let pass: String
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


test('get token by user credetials', async () => {
    const token_response = await axios.post('https://dummyjson.com/auth/login',
        {
            'username': uname,
            'password': pass,
        },
        {
            headers: { 'Content-Type': 'application/json' }
        })
    console.log(token_response.data)
})
