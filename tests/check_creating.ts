/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/no-floating-promises */
// request with based on fetch api
fetch('https://dummyjson.com/auth/login', {
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
