import express from 'express';
import { index } from '../controllers';
import apiRouterV1 from './api-v1';

const router = express.Router();

router.get('/', index);
router.use('/v1');

export default router;
