import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

const validateSchema = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map(err => err.message);
      return res.status(422).json(errors);
    }
    next();
  };
};

export default validateSchema;