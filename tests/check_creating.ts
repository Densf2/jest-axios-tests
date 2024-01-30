// request with based on fetch api
fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: '-',
    password: '--',
    // expiresInMins: 60, // optional
  })
})
.then(res => res.json())
.then(console.log);