import { getHotelById } from "@/BL/hotel.service"
import { connectToMongo } from "@/DL/connectToMongo"

export default async function Hotel({ params }) {
   await connectToMongo()
   const hotel = await getHotelById(params.hotelId)
   
   return (
      <div>Hotel {hotel.title}</div>
   )
}
