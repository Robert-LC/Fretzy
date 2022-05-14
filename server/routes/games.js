import express from 'express';
import { getGames } from '../controllers/games.js'
const router = express.Router();

//------ROUTES------
router.get('/', getGames);


export default router;