import HotelForm from "@/components/HotelForm"
import { getAllHotels } from "@/server/BL/hotel.service"
import { connectToMongo } from "@/server/DL/connectToMongo"

export default async function page() {

   await new Promise(resolve => setTimeout(resolve, 1000 * 10))

   await connectToMongo()
   const hotels = await getAllHotels()

   return (
      <div>
         <HotelForm />
         <ul className="flex flex-col gap-3">
            {hotels.map(hotel => <li key={hotel._id}>{hotel.title}</li>)}
         </ul>
      </div>
   )
}
