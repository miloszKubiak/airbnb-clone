import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  accommodation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserAccommodation",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  price: { type: Number, required: true },
  numberOfNights: { type: Number, required: true },
  numberOfGuests: { type: String, required: true },
  status: {
    type: String,
    enum: ["waiting", "paid", "canceled"],
    default: "waiting",
  },
});

const ReservationModel = mongoose.model("Reservation", ReservationSchema);

export default ReservationModel;
