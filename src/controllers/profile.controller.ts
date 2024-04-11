import { type Request, type Response } from 'express'

export const getProfile = async (req: Request | any, res: Response) => {
  const user = req.user
  return res.json({ user })
}
