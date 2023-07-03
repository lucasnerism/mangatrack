import { notFoundError } from "../errors/errors";
import * as mangaRepository from "../repositories/manga.repository";

export const getMangas = async (status: string) => {
  return await mangaRepository.getAll(status);
};

export const addManga = async (name: string, author: string, lastReleased: number, lastRead: number, status: string) => {
  await mangaRepository.insertOne(name, author, lastReleased, lastRead, status);
};

export const updateManga = async (id: number, name: string, author: string, lastReleased: number, lastRead: number, status: string) => {
  const result = await mangaRepository.getOneById(id);
  if (!result) throw notFoundError();

  await mangaRepository.updateById(id, name, author, lastReleased, lastRead, status);
};

export const deleteManga = async (id: number) => {
  const result = await mangaRepository.getOneById(id);
  if (!result) throw notFoundError();

  await mangaRepository.deleteById(id);
};