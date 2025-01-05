"use client";

import { cn, formatDate } from "@/lib/utils";

interface TransactionItemProps {
  type: "DEBIT" | "CREDIT";
  amount: number;
  description: string;
  timestamp: Date;
}

export function TransactionItem({
  type,
  amount,
  description,
  timestamp,
}: TransactionItemProps) {
  const isDebit = type === "DEBIT";
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Math.abs(amount));

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "h-10 w-10 rounded-full flex items-center justify-center",
            isDebit ? "bg-orange-100" : "bg-green-100",
          )}
        >
          <span className={isDebit ? "text-orange-600" : "text-green-600"}>
            {isDebit ? "🏦" : "💰"}
          </span>
        </div>
        <div>
          <p className="text-sm font-medium">{description}</p>
          <p className="text-xs text-gray-500">{formatDate(timestamp)}</p>
        </div>
      </div>
      <span
        className={cn(
          "text-sm font-medium",
          isDebit ? "text-red-500" : "text-green-500",
        )}
      >
        {isDebit ? "-" : "+"}
        {formattedAmount}
      </span>
    </div>
  );
}
