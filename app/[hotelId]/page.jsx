import { getHotelById } from "@/server/BL/hotel.service"
import { connectToMongo } from "@/server/DL/connectToMongo"

export default async function Hotel({ params }) {
   await connectToMongo()
   const hotel = await getHotelById(params.hotelId)
   
   return (
      <div>Hotel {hotel.title}</div>
   )
}
