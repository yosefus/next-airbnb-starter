import React from 'react'

export default function Loading() {
   return (
      <div className='flex gap-4 flex-col p-6 animate-pulse'>
         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => <div key={i} className='bg-white h-10 rounded w-full'></div>)}

      </div>
   )
}
