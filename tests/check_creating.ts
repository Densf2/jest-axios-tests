 // request with based on fetch api
 
import { AUTH_URL } from '../constants'

fetch(`${AUTH_URL}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: '-',
    password: '--',
    // expiresInMins: 60, // optional
  }),
})
  .then(async (res) => await res.json())
  .then(console.log)
