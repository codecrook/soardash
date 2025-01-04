import { getCards } from "@/db";
import { NextResponse } from "next/server";

// GET /api/cards
export async function GET() {
  try {
    const cards = await getCards();
    return NextResponse.json(cards);
  } catch (error) {
    console.error("Error fetching cards:", error);

    return NextResponse.json(
      { error: "Failed to fetch cards" },
      { status: 500 },
    );
  }
}
