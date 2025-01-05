import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { CardSkeleton } from "@/components/dashboard/card-skeleton";
import { TransactionSkeleton } from "@/components/dashboard/transaction-skeleton";
import { CardsSection } from "@/components/dashboard/cards-section";
import { TransactionsSection } from "@/components/dashboard/transactions-section";

export default async function Home() {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-medium">Overview</h2>
          <p className="text-sm text-muted-foreground">My Cards</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Left Column - My Cards */}
        <div className="order-1">
          <Suspense
            fallback={
              <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 snap-x">
                <CardSkeleton />
                <CardSkeleton />
              </div>
            }
          >
            <CardsSection />
          </Suspense>
        </div>

        {/* Right Column - Recent Transactions */}
        <Card className="p-6 order-2">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Recent Transaction</h3>
              <button className="text-sm text-blue-600">See All</button>
            </div>
            <Suspense
              fallback={
                <div className="space-y-4">
                  <TransactionSkeleton />
                  <TransactionSkeleton />
                  <TransactionSkeleton />
                </div>
              }
            >
              <TransactionsSection />
            </Suspense>
          </div>
        </Card>

        {/* Weekly Activity */}
        <Card className="p-6 order-3">
          <div className="space-y-2">
            <h3 className="font-medium">Weekly Activity</h3>
            <div className="h-[300px]">Chart goes here</div>
          </div>
        </Card>

        {/* Expense Statistics */}
        <Card className="p-6 order-4">
          <div className="space-y-2">
            <h3 className="font-medium">Expense Statistics</h3>
            <div className="h-[300px]">Pie chart goes here</div>
          </div>
        </Card>

        {/* Quick Transfer */}
        <Card className="p-6 order-5">
          <div className="space-y-2">
            <h3 className="font-medium">Quick Transfer</h3>
            <div className="h-[200px]">Transfer UI goes here</div>
          </div>
        </Card>

        {/* Balance History */}
        <Card className="p-6 order-6">
          <div className="space-y-2">
            <h3 className="font-medium">Balance History</h3>
            <div className="h-[200px]">Line chart goes here</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
