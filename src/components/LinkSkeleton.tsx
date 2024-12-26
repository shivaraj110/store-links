export default function LinkCardSkeleton() {
  return (
    <div className="bg-gray-700/30 rounded-lg shadow p-4 animate-pulse">
      <div className="flex items-center justify-between mb-2">
        <div className="h-5 bg-gray-700/40 rounded w-1/4"></div>
        <div className="flex gap-2">
          <div className="h-4 bg-gray-700/40 rounded w-12"></div>
          <div className="h-4 bg-gray-700/40 rounded w-12"></div>
        </div>
      </div>
      <div className="h-4 bg-gray-700/40 rounded w-1/2 mb-4"></div>
      <div className="flex items-center">
        <div className="h-4 w-4 bg-gray-700/40 rounded-full mr-2"></div>
        <div className="h-4 bg-gray-700/40 rounded w-24"></div>
        <div className="ml-auto h-4 bg-gray-700/40 rounded w-20"></div>
      </div>
    </div>
  );
}
