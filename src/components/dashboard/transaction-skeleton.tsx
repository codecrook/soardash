import { Skeleton } from "@/components/ui/skeleton";

export function TransactionSkeleton() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-3 w-[100px]" />
        </div>
      </div>
      <Skeleton className="h-4 w-16" />
    </div>
  );
}
