import { asyncHandler } from "../utils/asyncHandler.js";

const createGame = asyncHandler(async (req, res) => {
  //TODO Logic to create a new game
});

const updateGame = asyncHandler(async (req, res) => {
  //TODO Logic to update an existing game
});

const getGameById = asyncHandler(async (req, res) => {
  //TODO Logic to get a game by its ID
});

const getHistoryOfUser = asyncHandler(async (req, res) => {
  //TODO Logic to get the history of a user
});

export { createGame, updateGame, getGameById, getHistoryOfUser };
