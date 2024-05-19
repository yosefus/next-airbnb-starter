import { getAllHotels } from '@/server/BL/hotel.service'
import { connectToMongo } from '@/server/DL/connectToMongo'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  // to ssr
  // unstable_noStore()


  // to ssr - no - store
  // const hotels = await fetch('http://localhost:3003/api/listings', { cache: 'no-store' })
  //   .then(res => res.json())

  // const all = await HotelsModel.insertMany(hotels)
  // console.log({ all });

  await connectToMongo()
  const hotels = await getAllHotels()

  return (
    <div>
      <ul>
        {hotels.map(hotel => <li key={hotel._id}>
          <Link href={`/${hotel._id}`} >
            <Image width={500} height={400} src={hotel.images[0]} alt={hotel.title} />
            {hotel.title}
          </Link></li>)}
      </ul>
    </div>
  )
}
