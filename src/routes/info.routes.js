import { Router } from 'express'
import { processInfo } from '../controllers/info.controllers.js';

const router = Router();

router.get('/info', processInfo);
router.get('/', (_req, res) => {
  res.redirect('/info')
})

export default router