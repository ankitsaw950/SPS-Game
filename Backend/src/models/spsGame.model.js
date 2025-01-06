import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const spsGameSchema = new mongoose.Schema(
  {
    players: {
      type: [mongoose.Schema.Types.ObjectId], // Array to store player IDs
      ref: "User",
      required: true,
    },
    isMultiplayer: {
      type: Boolean,
      default: false, // Whether the game is PvP or PvC (default is PvC)
    },
    rounds: {
      total: { type: Number, default: 0 }, // Total rounds set by the user
      played: { type: Number, default: 0 }, // Rounds played so far
    },
    scores: {
      player1: { type: Number, default: 0 },
      player2: { type: Number, default: 0 },
    },
    winner: {
      type: String, // Can be 'player1', 'player2', or 'draw'
      default: null,
    },
    gameHistory: [
      {
        roundNumber: { type: Number, required: true },
        player1Choice: { type: String, required: true }, // 'stone', 'paper', or 'scissors'
        player2Choice: { type: String, required: true }, // 'stone', 'paper', or 'scissors'
        result: { type: String, required: true }, // 'player1', 'player2', or 'draw'
      },
    ],
  },
  { timestamps: true }
);

spsGameSchema.plugin(mongooseAggregatePaginate);
export const spsGame = mongoose.model("spsGame", spsGameSchema);
