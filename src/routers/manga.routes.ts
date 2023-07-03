import { Router } from "express";
import * as mangaController from "../controllers/manga.controller";
import validateSchema from "../middlewares/validateSchema.middleware";
import { mangaSchema } from "../schemas/manga.schema";

const mangaRouter = Router();

mangaRouter.get('/mangas', mangaController.getMangas);
mangaRouter.post('/mangas', validateSchema(mangaSchema), mangaController.addManga);
mangaRouter.put('/mangas/:id', validateSchema(mangaSchema), mangaController.updateManga);
mangaRouter.delete('/mangas/:id', mangaController.deleteManga);

export default mangaRouter;