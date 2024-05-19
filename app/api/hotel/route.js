import { NextResponse } from "next/server"

export const GET = async() => {
   return NextResponse.json({success: true})
}

export const POST = async (req) => {
   const body = await req.json()
   return NextResponse.json({success: true, body})
}