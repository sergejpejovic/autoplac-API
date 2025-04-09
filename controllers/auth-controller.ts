import authService from "../services/auth-service";
import { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
  const data = await authService.register(req.body);
  res.send(data);
};

const login = async (req: Request, res: Response) => {
  const data = await authService.login(req.body);
  res.send(data);
};

export default { register, login };
