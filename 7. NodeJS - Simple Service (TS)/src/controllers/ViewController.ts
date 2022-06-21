import { Request, Response } from "express";

// Service
import ViewHargaSembako from "../services/ViewHargaSembako";

export const HargaSembako = async (req: Request, res: Response) => {
  const { code, message, render }: any = await ViewHargaSembako();
  if (render) {
    return res.status(code).json(render);
  }
  return res.status(code).json({ message });
};
