'use client'

import { useRouter } from "next/navigation"

export default function Search() {
   const router = useRouter()

   const handleSearch = (e) => {
      e.preventDefault()
      router.push('/result?search=' + e.target.search.value)
   }

   return (
      <form onSubmit={handleSearch}>
         <input className="text-black" type="text" name='search' placeholder="search" />
         <button type="submit">submit</button>
      </form>
   )
}
