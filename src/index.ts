import express, {Express, Request, Response} from 'express'

const app: Express = express()
const port = 8011

app.get('/', (req: Request, res: Response) => {
    console.log('fibiaan')
    res.send('hey')
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})