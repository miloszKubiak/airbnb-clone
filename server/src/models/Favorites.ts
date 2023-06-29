import mongoose from "mongoose";

const FavoritesSchema = new mongoose.Schema({
  accommodation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "accommodation",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const FavoritesModel = mongoose.model("Favorites", FavoritesSchema);

export default FavoritesModel;
