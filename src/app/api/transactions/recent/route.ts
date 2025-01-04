import { getTransactions } from "@/db";
import { NextResponse } from "next/server";

// GET /api/transactions/recent?limit=5
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "5");

    const transactions = await getTransactions();
    const recentTransactions = transactions
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
      )
      .slice(0, limit);

    return NextResponse.json(recentTransactions);
  } catch (error) {
    console.error("Error fetching recent transactions:", error);

    return NextResponse.json(
      { error: "Failed to fetch recent transactions" },
      { status: 500 },
    );
  }
}
