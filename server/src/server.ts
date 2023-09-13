import fastify from "fastify";
import { getAllPromptsRoutes } from "./routes/get-all-prompts";
import { uploadVideo } from "./routes/upload-videos";

const app = fastify()

app.register(uploadVideo)
app.register(getAllPromptsRoutes)

app.listen({ port: 3333 })