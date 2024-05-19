"use server"

import { revalidatePath } from "next/cache";
import { createHotelService } from "../BL/hotel.service";
import { connectToMongo } from "../DL/connectToMongo"
import { redirect } from "next/navigation";

const hotelObject = {
   title: 'Some hotel',
   description: 'Experience the ultimate tropical getaway at our luxurious beachfront resort. Enjoy the stunning ocean views, pristine white sandy beaches, and world-class amenities.',
   images: [
      'https://example.com/resort-beach.jpg',
      'https://example.com/resort-pool.jpg',
      'https://example.com/resort-room.jpg',
   ],
   location: {
      city: 'Honolulu',
      country: 'United States',
      latitude: 21.2789,
      longitude: -157.8287,
   },
   price_per_night: '$500',
   rating: 4.8,
   amenities: ['Wi-Fi', 'Pool', 'Gym', 'Spa', 'Beachfront', 'Restaurant'],
   host: {
      name: 'Jane Smith',
      avatar: 'https://example.com/avatar.jpg',
      is_superhost: true,
   },
   reviews_count: 2875,
   property_type: 'Resort',
   beds: 2,
   baths: 2,
   max_guests: 4,
   check_in_time: new Date('2023-06-01T15:00:00Z'),
   check_out_time: new Date('2023-06-08T11:00:00Z'),
};

export const createHotelAction = async (fd) => {
   const { title } = Object.fromEntries(fd)
   try {
      await connectToMongo()
      const newHotel = { ...hotelObject, title, id: `${Math.random()}` }
      const newHotelFromDb = await createHotelService(newHotel)
      revalidatePath('/test')
      revalidatePath(`/hotel/${newHotelFromDb._id}`)
   } catch (error) {
      console.log({ error });
      return { message: 'not created' }
   }
   redirect('/')
}