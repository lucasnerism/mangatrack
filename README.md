# MangaTrack
A simple API made with Node + Typescript and Express to keep track of last read chapter of your favorites mangas.

## How to run this localy
1. Clone this repository
2. Install all dependencies

```bash
npm i
```
3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env` file using the `.env.example` file as basis
5. Run the API in a development environment:

```bash
npm run dev
```

## Routes
POST: /mangas<br>
Body:{ "name": "Manga name", "author": "Author name", "lastReleased": 50, "lastRead": 48, "status": "ongoing"|"hiatus"|"completed"|"canceled" }<br>
*"lastRead" must be less or equal than "lastReleased"*

GET: /mangas?status=ongoing

PUT: /mangas/:id<br>
Body:{ "name": "Manga name", "author": "Author name", "lastReleased": 50, "lastRead": 48, "status": "ongoing"|"hiatus"|"completed"|"canceled" }<br>
*"lastRead" must be less or equal than "lastReleased"*

DELETE: /mangas/:id
