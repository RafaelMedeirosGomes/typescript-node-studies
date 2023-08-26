import http from 'node:http'

export function main() {
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello from node')
  }).listen(3000, () => {
    console.log('Server running at http://localhost:3000/')
  })
}
