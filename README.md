POST: /mangas
Body: { "name": "Manga name", "author": "Author name", "lastReleased": 50, "lastRead": 48, "status": "ongoing"|"hiatus"|"completed"|"canceled" }
*"lastRead" must be less or equal than "lastReleased"*

GET: /mangas?status=ongoing

PUT: /mangas/:id
Body: { "name": "Manga name", "author": "Author name", "lastReleased": 50, "lastRead": 48, "status": "ongoing"|"hiatus"|"completed"|"canceled" }
*"lastRead" must be less or equal than "lastReleased"*

DELETE: /mangas/:id