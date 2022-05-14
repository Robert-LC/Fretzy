import Game from '../models/game.js';

export const getGames = (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);

    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}

