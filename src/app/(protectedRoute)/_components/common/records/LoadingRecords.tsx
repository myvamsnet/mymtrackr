import { Skeleton } from "@/components/ui/skeleton";

export const LoadingRecords = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <section
          className="py-4 flex justify-between items-center"
          key={`records-${index}`}
        >
          <div className="flex items-center gap-2">
            <Skeleton className="  h-8 w-8 rounded-full flex justify-center items-center" />
            <div className="grid gap-2">
              <Skeleton className="w-40 h-6 rounded-lg" />
              <Skeleton className="w-40 h-6 rounded-lg" />
            </div>
          </div>
          <div>
            <Skeleton className="w-20 h-6 rounded-lg" />
          </div>
        </section>
      ))}
    </>
  );
};
