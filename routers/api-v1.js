import express from 'express';
const router = express.Router();
import { findRoom } from '../controllers/apiControllerV1/roomController';

router.get('/room');
