import express, { Express, Request, Response } from 'express'
import { writeFileSync } from 'fs'

const app: Express = express()
const port = 8001

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    console.log('fibiaan')
    res.send('hey')
})

app.post('/payload', async (req: Request, res: Response) => {
    console.log('payload')
    await writeFileSync('query.json', JSON.stringify(req.body))
    console.log(req.body)
    res.end()
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})