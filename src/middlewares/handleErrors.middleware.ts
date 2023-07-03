import { NextFunction, Request, Response } from "express";

const errorsHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if (error.type === 'notFound') return res.status(404).send(error.message);

  res.status(500).send(error.message ? error.message : 'Something went wrong');
  next();
};

export default errorsHandler;