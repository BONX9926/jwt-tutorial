import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import routes from './routes'
import deserializeUser from "./middleware/deserializeUser"

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(deserializeUser)

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000"
  })
)

function main() {
  app.listen(4000, () => {
    console.log(`Serce listening at http://localhost:4000`)
  })

  routes(app)
}

main()