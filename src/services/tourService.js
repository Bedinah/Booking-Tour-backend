import toursModel from "../models/tours";

class TourServices {
  // create tour
  static async createTour(req) {
    const newTour = toursModel.create(req.body);

    return newTour;
  }

  // get all tours
  static async getAllTours(req) {
    const tours = toursModel.find();

    return tours;
  }

  // update tour
  static async updateTour(req) {
    await toursModel.findOneAndUpdate({ _id: req.params.id }, req.body);
    const tours = await toursModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return tours;
  }
}

export default TourServices;
