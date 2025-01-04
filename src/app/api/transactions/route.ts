import { getTransactions } from "@/db";
import { NextResponse } from "next/server";

// GET /api/transactions
export async function GET() {
  try {
    const transactions = await getTransactions();
    return NextResponse.json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);

    return NextResponse.json(
      { error: "Failed to fetch transactions" },
      { status: 500 },
    );
  }
}
