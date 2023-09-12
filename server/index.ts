import fastify from "fastify";
import { google } from 'googleapis'

const app = fastify()

app.post('/auth', (request, reply) => {

  const service = google.youtube('v3')
})

app.listen({ port: 5555 })