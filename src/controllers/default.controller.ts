import { Request, Response } from "express";
import defaultService from "../services/default.service";

function getHello(req: Request, res: Response): void {
  const hello = defaultService.getHello();

  res.send(hello);
}

export default {
  getHello,
};
