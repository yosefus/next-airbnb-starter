"use client"

import { createHotelAction } from "@/server/actions/hotel.action";
import { useState } from "react";


export default function HotelForm() {
   const [title, setTitle] = useState('')

   const handleSubmit = e => {
      e.preventDefault()
      console.log(e.target.title.value)
   }

   const validate = () => {
      return false
   }

  return (
     <div>
        <form action={createHotelAction} >
           <input
              className="text-black"
              onChange={e => setTitle(e.target.value)}
              type="text"
              name='title'
              placeholder="title" />
           <button disabled={validate()} className="disabled:opacity-50 disabled:bg-red-300">submit</button>
        </form>
    </div>
  )
}
