import { Router, Request, Response } from 'express';
import { botRouter } from '@routes/bot.routes';

const router = Router();

router.get(
  '/',
  (request: Request, response: Response): Response =>
    response.status(200).json({
      status: 'OK',
      message:
        'A API está funcionando corretamente! Utilize um endpoint válido.',
    })
);

router.use('/discordbot', botRouter);

//404
router.all(
  '*',
  (request: Request, response: Response): Response =>
    response.status(404).json({
      status: 'Erro',
      message: 'Endpoint inválido',
    })
);

export default router;
