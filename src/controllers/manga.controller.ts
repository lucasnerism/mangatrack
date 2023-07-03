import * as mangaService from "../services/manga.service";
import { Request, Response } from "express";

type Status = {
  status: string;
};

export const getMangas = async (req: Request<{}, {}, {}, Status>, res: Response) => {
  const { query } = req;
  const status = query.status;

  const mangas = await mangaService.getMangas(status ? status.toLowerCase() : '');
  res.status(200).send(mangas);
};

export const addManga = async (req: Request, res: Response) => {
  const { name, author, lastReleased, lastRead, status } = req.body;
  await mangaService.addManga(name, author, lastReleased, lastRead, status);
  res.status(201).send('OK');
};

export const updateManga = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, author, lastReleased, lastRead, status } = req.body;

  const mangaId = parseInt(id);
  if (mangaId <= 0 || isNaN(mangaId)) return res.status(400).send('Invalid id');

  await mangaService.updateManga(mangaId, name, author, lastReleased, lastRead, status);
  res.status(200).send('OK');
};

export const deleteManga = async (req: Request, res: Response) => {
  const { id } = req.params;

  const mangaId = parseInt(id);
  if (mangaId <= 0 || isNaN(mangaId)) return res.status(400).send('Invalid id');

  await mangaService.deleteManga(mangaId);
  res.status(200).send('OK');
};