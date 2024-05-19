import { getAllHotels } from '@/server/BL/hotel.service'
import { connectToMongo } from '@/server/DL/connectToMongo'
import { HotelsModel } from '@/server/DL/hotel.model'
import { revalidatePath } from 'next/cache'
import React from 'react'

async function Page() {
  await connectToMongo()
  const hotels = await getAllHotels()
  const hotelObject = {
    title: 'Luxurious Beachfront Resort',
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

  const createHotel = async (fd) => {
    'use server'

    await HotelsModel.create({
      ...hotelObject, id: `${Math.random()}`
    })

    revalidatePath('/rev')
  }
  return (
    <div>
      <form action={createHotel}>
        <input type="text" name="title" />
        <button>submit</button>
      </form>
      <ul>
        {hotels.map(hotel => <li key={hotel._id}>{hotel.title}</li>)}
      </ul>
    </div>
  )
}

export default Page