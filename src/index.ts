import express from 'express'
import cors from 'cors'
import { checkToken } from './middleware/checkToken.middleware'
import { getProfile } from './controllers/profile.controller'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger'
import { routes } from './routes'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT

app.use(
  cors({
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'x-access-token'],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
  }),
)
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.get('/profile', checkToken, getProfile)

routes(app)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
