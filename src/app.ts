import express, { Request, Response } from "express";
import "express-async-errors"
import cors from "cors"
import mangaRouter from "./routers/manga.routes";
import errorsHandler from "./middlewares/handleErrors.middleware";

const app = express();
app.use(cors())
app.use(express.json())
app.use(mangaRouter)
app.use(errorsHandler)

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("I'm ok!");
});

export default app