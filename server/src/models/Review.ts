import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    accommodation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "accommodation",
      required: true,
    },
    comment: {
      type: String,
      required: [true, "Please provide review text."],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, "Please provide rating."],
    },
  },
  { timestamps: true }
);

ReviewSchema.index({ accommodation: 1, user: 1 }, { unique: true });

ReviewSchema.post("save", async function () {
  console.log("post save called");
});

const ReviewModel = mongoose.model("Review", ReviewSchema);

export default ReviewModel;
