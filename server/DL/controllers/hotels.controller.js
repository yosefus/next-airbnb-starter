import { HotelsModel } from "../hotel.model";

export const getHotels =  () => HotelsModel.find();
export const createHotel =  (hotel) => HotelsModel.create(hotel);