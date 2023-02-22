import mongoose from "mongoose";

const AccommodationSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  address: String,
  description: String,
  photos: [String],
  perks: [String],
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
  price: Number,
});

const AccommodationModel = mongoose.model("Accommodation", AccommodationSchema);

export default AccommodationModel;
