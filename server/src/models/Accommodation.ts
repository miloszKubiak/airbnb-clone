import mongoose from "mongoose";

const AccommodationSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  ownerName: String,
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
  category: {
    type: String,
    enum: [
      "mills",
      "mansions",
      "luxe",
      "houses",
      "castles",
      "countryside",
      "tropical",
      "agritourism",
      "beach",
      "lake",
      "barns",
      "islands",
      "farms",
    ],
    default: "houses",
  },
  averageRating: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
});

const AccommodationModel = mongoose.model("Accommodation", AccommodationSchema);

export default AccommodationModel;
