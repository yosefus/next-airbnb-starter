import { HotelsModel } from "@/server/DL/hotel.model";
import { createHotel, getHotels } from "../DL/controllers/hotels.controller";

export const getAllHotels =  () =>  getHotels()
export const getHotelById =  (id) =>  HotelsModel.findById(id)
export const createHotelService =  (hotel) =>  createHotel(hotel)