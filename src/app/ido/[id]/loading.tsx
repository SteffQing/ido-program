import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-10 rounded-lg bg-zinc-800" />
              <Skeleton className="w-40 h-8 bg-zinc-800" />
            </div>
            <div className="space-y-4">
              <Skeleton className="w-full h-4 bg-zinc-800" />
              <Skeleton className="w-full h-4 bg-zinc-800" />
              <Skeleton className="w-3/4 h-4 bg-zinc-800" />
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-6">
            <Skeleton className="w-40 h-8 bg-zinc-800" />
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <Skeleton className="w-24 h-4 bg-zinc-800" />
                <Skeleton className="w-32 h-4 bg-zinc-800" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Skeleton className="w-20 h-4 bg-zinc-800" />
                  <Skeleton className="w-12 h-4 bg-zinc-800" />
                </div>
                <Skeleton className="w-full h-2 bg-zinc-800" />
                <div className="flex justify-between">
                  <Skeleton className="w-32 h-4 bg-zinc-800" />
                  <Skeleton className="w-40 h-4 bg-zinc-800" />
                </div>
              </div>
              <Skeleton className="w-full h-9 bg-zinc-800" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[0, 1].map((index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-6">
              <Skeleton className="w-40 h-8 bg-zinc-800" />
              <div className="space-y-4">
                {[0, 1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex justify-between py-3 border-b border-zinc-800">
                    <Skeleton className="w-32 h-4 bg-zinc-800" />
                    <Skeleton className="w-24 h-4 bg-zinc-800" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}
