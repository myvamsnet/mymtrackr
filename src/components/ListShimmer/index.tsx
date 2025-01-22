import React from "react";
import { Skeleton } from "../ui/skeleton";

export interface ListShimmerProps {
  length?: number; // Number of shimmer lines to show
  variant?: "default" | "small" | "large"; // Allow different shimmer sizes
}

const ListShimmer: React.FC<ListShimmerProps> = ({
  length = 10,
  variant = "default",
}) => {
  const shimmerClass =
    variant === "small"
      ? "h-8 w-full rounded-md"
      : variant === "large"
      ? "h-12 w-full rounded-md"
      : "h-10 w-full rounded-md"; // Default to a medium size shimmer

  return (
    <div data-testid="listShimmer" className="space-y-4">
      {Array.from({ length })?.map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          {/* Skeleton for Text or Content */}
          <Skeleton className={`${shimmerClass} animate-pulse`} />
        </div>
      ))}
      {/* Optional Skeleton for Footer/Loading */}
      <div className="mt-4">
        <Skeleton className="h-[30px] w-3/4 mx-auto rounded-md animate-pulse" />
      </div>
    </div>
  );
};

export default ListShimmer;
