import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: String,
    // geoCode: {
    //   description:String,
    //   latitude:Number,
    //   longitude:Number,
      
    // },
    location:[String],
    description: String,
    duration: {
      startDate:Date,
        // "required":true
      endDate: Date,
       // "required":true
      },
    seat: Number,
    price:String,
    picture: String,
    rate:Number,
    isActive: {
      type: Boolean,
      default: true,
    },
     createdBy:{
     type:mongoose.Schema.ObjectId,
     ref:"user"
      },
  },
  { timestamps: true }
);

tourSchema.pre(/^find/,function(next){
  this.populate({
    path:"createdBy",
    select:"email phone names picture",
  })
  next();
});
const toursModel = mongoose.model("tours", tourSchema);

export default toursModel;
