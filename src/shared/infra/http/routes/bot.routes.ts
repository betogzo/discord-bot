import { Router, Request, Response } from 'express';
import sendMessageToChannel from '@bot/services/sendMessageToChannel';

export const botRouter = Router();

//Chama o serviço de envio de mensagem personalizada para um canal específico
botRouter.post(
  '/message/:channelId',
  (request: Request, response: Response): Response => {
    const { message } = request.body;
    const { channelId } = request.params;

    if (!channelId) throw new Error('É preciso informar o ID do canal na URL!');

    try {
      sendMessageToChannel(channelId, message);
      return response
        .status(201)
        .json({ status: 'OK', message: 'Mensagem enviada com sucesso.' });
    } catch (error: any) {
      return response
        .status(400)
        .json({ status: 'Erro', message: error.message });
    }
  }
);
