import { HotelsModel } from "@/DL/hotel.model";

export const getAllHotels =  () =>  HotelsModel.find()
export const getHotelById =  (id) =>  HotelsModel.findById(id)