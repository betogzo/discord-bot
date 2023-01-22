import { Router, Request, Response } from 'express';
import sendMessageToChannel from '@bot/services/sendMessageToChannel';
import { messageDTO } from '@DTOs/messageDTO';

export const botRouter = Router();

//Chama o serviço de envio de mensagem personalizada para um canal específico
botRouter.post('/message', (request: Request, response: Response): Response => {
  try {
    const data: messageDTO = request.body;
    sendMessageToChannel(data.channelId, data.message);
    return response
      .status(201)
      .json({ status: 'OK', message: 'Mensagem enviada com sucesso.' });
  } catch (error: any) {
    return response
      .status(400)
      .json({ status: 'Erro', message: error.message });
  }
});

