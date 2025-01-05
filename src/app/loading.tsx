import { Card } from "@/components/ui/card";
import { CardSkeleton } from "@/components/dashboard/card-skeleton";
import { TransactionSkeleton } from "@/components/dashboard/transaction-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <Skeleton className="h-7 w-24" />
          <Skeleton className="h-5 w-16" />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Left Column - My Cards */}
        <div className="order-1">
          {/* Horizontal scroll container */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 snap-x">
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>

        {/* Right Column - Recent Transactions */}
        <Card className="p-6 order-2">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-5 w-14" />
            </div>
            <div className="space-y-4">
              <TransactionSkeleton />
              <TransactionSkeleton />
              <TransactionSkeleton />
            </div>
          </div>
        </Card>

        {/* Weekly Activity */}
        <Card className="p-6 order-3">
          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-[300px] w-full" />
          </div>
        </Card>

        {/* Expense Statistics */}
        <Card className="p-6 order-4">
          <div className="space-y-2">
            <Skeleton className="h-6 w-36" />
            <Skeleton className="h-[300px] w-full" />
          </div>
        </Card>

        {/* Quick Transfer */}
        <Card className="p-6 order-5">
          <div className="space-y-2">
            <Skeleton className="h-6 w-28" />
            <Skeleton className="h-[200px] w-full" />
          </div>
        </Card>

        {/* Balance History */}
        <Card className="p-6 order-6">
          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-[200px] w-full" />
          </div>
        </Card>
      </div>
    </div>
  );
}
