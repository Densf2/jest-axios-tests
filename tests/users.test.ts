import axios from 'axios';
import jsonpath from 'jsonpath'
import { writeFile } from 'node:fs'

test('get list of users', async () => {
    const response = await axios.get('https://dummyjson.com/users', {
    headers: {
        'authority': 'dummyjson.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'cookie': '_ga_31N299BXMJ=GS1.1.1705351945.1.0.1705351945.60.0.0; _ga=GA1.1.621466112.1705351946',
        'dnt': '1',
        'referer': 'https://dummyjson.com/docs/auth',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'sec-gpc': '1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
});
let uname = jsonpath.query(response.data, '$.users[25].username')
let pass = jsonpath.query(response.data, '$.users[25].password')
//await writeFile('response.json', JSON.stringify(response.data), 'utf8', (err) => {
//    if (err) throw err;
//    console.log('The file has been saved!')})
});
