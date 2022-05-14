import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
    id: {type: String, required: true, indeX: { unique: true, sparse: true}},
    title: String,
    description: String,
});

//Create a model from thbe schema
const Game = mongoose.model('Game', gameSchema);
export default Game;