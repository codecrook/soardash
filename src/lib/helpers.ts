export async function getRecentTransactions(
  limit: number,
): Promise<Transaction[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/transactions/recent?limit=${limit}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch recent transactions");
  }

  return res.json();
}

export async function getCards(): Promise<Card[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/cards`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch cards");
  }

  return res.json();
}
