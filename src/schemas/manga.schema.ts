import joi from "joi";

export const mangaSchema = joi.object({
  name: joi.string().required(),
  author: joi.string().required(),
  lastReleased: joi.number().positive().required(),
  lastRead: joi.number().positive().max(joi.ref('lastReleased')),
  status: joi.string().valid('completed', 'ongoing', 'canceled', 'hiatus').required()
});