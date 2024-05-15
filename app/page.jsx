import { unstable_noStore } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Home() {
  // to ssr
  // unstable_noStore()


  // to ssr - no - store
  const hotels = await fetch('http://localhost:3003/api/listings')
    .then(res => res.json())

  return (
    <div>
      {/* all hotels */}
      {/* <h1 className='text-6xl'>{joke.value}</h1> */}

      <ul>
        {hotels.map(hotel => <li key={hotel.id}>
          <Link href={`/${hotel.id}`} >
            <img width={500} height={400} src={hotel.images[0]} alt={hotel.title} />
          {hotel.title}
        </Link></li>)}
      </ul>
    </div>
  )
}
