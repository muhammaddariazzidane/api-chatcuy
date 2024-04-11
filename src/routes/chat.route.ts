import { Router } from 'express'
import { deleteMessage, getMessage, sendMessage, updateMessage } from '../controllers/chat.controller'
import { checkToken } from '../middleware/checkToken.middleware'

export const ChatRouter: Router = Router()

ChatRouter.use(checkToken)

ChatRouter.post('/:id/send', sendMessage)
ChatRouter.get('/:id/message', getMessage)
ChatRouter.put('/:id/update', updateMessage)
ChatRouter.delete('/:id/delete', deleteMessage)
