import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json(
    { error: "shadcn/create has been removed" },
    { status: 410 }
  )
}

export async function POST() {
  return GET()
}
