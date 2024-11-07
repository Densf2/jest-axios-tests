/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/comma-dangle */
// request with based on fetch api
// eslint-disable-next-line @typescript-eslint/no-floating-promises
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
