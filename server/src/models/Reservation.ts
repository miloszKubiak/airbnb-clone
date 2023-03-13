import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  accommodationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Accommodation",
    required: true,
  },
  accommodationName: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userName: { type: String, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  price: { type: Number, required: true },
  numberOfNights: { type: Number, required: true },
  numberOfGuests: { type: String, required: true },
});

const ReservationModel = mongoose.model("Reservation", ReservationSchema);

export default ReservationModel;
