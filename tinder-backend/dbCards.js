import mongoose from "mongoose";

const cardsSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

export default mongoose.model("cards", cardsSchema);
