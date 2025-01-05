import { TransactionItem } from "@/components/dashboard/transaction-item";
import { getRecentTransactions } from "@/lib/helpers";

export async function TransactionsSection() {
  const transactions = await getRecentTransactions(3);

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          type={transaction.type}
          amount={transaction.amount}
          description={transaction.description}
          timestamp={new Date(transaction.timestamp)}
        />
      ))}
    </div>
  );
}
