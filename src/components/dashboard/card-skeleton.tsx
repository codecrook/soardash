import { Skeleton } from "@/components/ui/skeleton";

export function CardSkeleton() {
  return (
    <div className="min-w-[300px] md:min-w-[250px] snap-center">
      <Skeleton className="h-[180px] bg-gray-800/50" />
    </div>
  );
}
