/* eslint-disable @typescript-eslint/comma-dangle */
import axios from 'axios'
import jsonpath from 'jsonpath'
import { writeFile } from 'node:fs/promises'
import { BASE_URL, USERS_URL, AUTH_URL } from '../constants'

// list of variables used in the test scenarios
let uname: string
let pass: string
let authToken: string

describe('getting token', () => {
  test('get list of users', async () => {
    const response = await axios.get(USERS_URL, {
      headers: {
        authority: 'dummyjson.com',
        referer: `${BASE_URL}/docs/auth`,
      },
    })
    uname = String(jsonpath.query(response.data, '$.users[5].username'))
    pass = String(jsonpath.query(response.data, '$.users[5].password'))
    // step used to debug response data & save into the file
    // await writeFile('response.json', JSON.stringify(response.data), 'utf8', (err) => {
    //    if (err) throw err;
    //    console.log('The file has been saved!')})
  })

  test('get token by user credentials', async () => {
    const tokenResponse = await axios.post(
      AUTH_URL,
      {
        username: uname,
        password: pass,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    authToken = String(jsonpath.query(tokenResponse.data, '$..accessToken'))
    const newData = {
      token: authToken,
    }
    try {
      await writeFile('data/token2.json', JSON.stringify(newData))
      console.log('The token has been saved!')
    } catch (err: any) {
      console.error('issue with saving token', err.message)
    }
  })
})
