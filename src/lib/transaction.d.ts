interface Transaction {
  id: string;
  timestamp: Date;
  amount: number;
  type: "DEBIT" | "CREDIT";
  description: string;
  category: TransactionCategory;
  account: string;
}

interface TransactionCategory {
  id: string;
  name: string;
}
