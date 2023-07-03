import { db } from "../database/connect";

type Manga = {
  id: number;
  name: string;
  author: string;
  lastReleased: number;
  lastRead: number;
  status: string;
};

export const getAll = async (status: string) => {
  let queryParams = [];
  let query = `
  SELECT
    id,name,author,"lastReleased","lastRead",status
  FROM
    mangas
 `;
  if (status) {
    query += `
    WHERE
      status = $1
    `;
    queryParams.push(status);
  }

  const result = await db.query<Manga>(query, queryParams);
  return result.rows;
};

export const getOneById = async (id: number) => {
  const query = `
  SELECT
    id,name,author,"lastReleased","lastRead",status
  FROM
    mangas
  WHERE
    id=$1
 `;
  const result = await db.query<Manga>(query, [id]);
  return result.rows[0];
};

export const insertOne = (name: string, author: string, lastReleased: number, lastRead: number, status: string) => {
  const query = `
  INSERT INTO
    mangas (name,author,"lastReleased","lastRead",status)
  VALUES
    ($1,$2,$3,$4,$5)
  `;
  return db.query(query, [name, author, lastReleased, lastRead, status]);
};

export const updateById = (id: number, name: string, author: string, lastReleased: number, lastRead: number, status: string) => {
  const query = `
  UPDATE
    mangas
  SET
    name =$1, author=$2, "lastReleased"=$3, "lastRead"=$4, status=$5
  WHERE
    id = $6
  `;
  return db.query(query, [name, author, lastReleased, lastRead, status, id]);
};

export const deleteById = (id: number) => {
  const query = `
  DELETE FROM
    mangas
  WHERE
    id=$1
  `;
  return db.query(query, [id]);
};