import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    bookedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },

    tourId: {
      type: mongoose.Schema.ObjectId,
      ref: "tours",
    },

    paidAmount: String,
    status: String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

userSchema.pre(/^find/, function (next) {
  this.populate({
    path: "bookedBy",
    select: "email phone names picture",
  });
  next();
});

tourSchema.pre(/^find/, function (next) {
  this.populate({
    path: "tourId",
    select: "title duration price seat",
  });
  next();
});

const bookingModel = mongoose.model("booking", bookingSchema);

export default bookingModel;
