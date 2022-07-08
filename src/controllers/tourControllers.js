import TourServices from "../services/tourService";
import Response from "../utils/response";

class TourController{
    // create a tour
    static async createTour(req,res){
        const newTour = await TourServices.createTour(req)
        if (!newTour){
            // return res.status(400).json({message:"failed to register",});
            return Response.errorMessage(res,"Failed to register tour",400);
        }
        // return res.status(201).json({message:"success",data: newTour});
        return Response.successMessage(res,"tour successfully created",newTour,200)
    }

    //get all tours
    static async getAllTours(req,res){
        const tours = await TourServices.getAllTours(req)
        if (!tours){
            // return res.status(400).json({message:"failed to getall",});
            return Response.errorMessage(res, "Failed to get all tour",400)
        }
        return res.status(200).json({message:"success",data: tours});
    }

    static async updateTour(req,res){
        const newTour = await TourServices.updateTour(req)
        if (!newTour){
            return res.status(400).json({message:"failed to update Tour",});
        }
        return res.status(201).json({message:"success",data: newTour});
    }

    static async getOneTour(res, req){
        const tour = await TourServices.getOneTour(req);
        if (!tour){
            return Response.errorMessage(res,"Tour not found",400)
        }
        return Response.successMessage(res, "Here is tour",200)
    }
}

export default TourController;