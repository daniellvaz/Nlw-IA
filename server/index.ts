import fastify from "fastify";
import youtube from 'youtube-api';

const app = fastify()

app.get('/', (request, reply) => {
  reply.send('Upload.ia 1.0.0')
})

app.listen({ port: 5555 })