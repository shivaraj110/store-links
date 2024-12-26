const ProfileSkeleton = () => {
  return (
    <div className="max-w-2xl p-4 space-y-4 ">
      <div className="flex justify-between mb-8">
        <div className="space-x-4">
          <div className="h-6 w-24 bg-gray-400 rounded animate-pulse inline-block" />
          <div className="h-6 w-24 bg-gray-400 rounded animate-pulse inline-block" />
        </div>
        <div className="h-6 w-16 bg-gray-400 rounded animate-pulse" />
      </div>

      <div className="flex items-center bg-gray-700/40 rounded-lg space-x-4 p-10 mb-8">
        <div className="w-16 h-16 bg-gray-400 rounded-full animate-pulse" />
        <div>
          <div className="h-5 w-40 bg-gray-400 rounded animate-pulse mb-2" />

          <div className="h-4 w-24 bg-gray-400 rounded animate-pulse" />
        </div>
      </div>

      <div className="p-10 bg-gray-200 rounded-lg bg-gray-700/40  space-y-6">
        <div className="space-y-2">
          <div className="h-4 w-20 bg-gray-400 rounded animate-pulse" />
          <div className="h-10 w-full bg-gray-400 rounded animate-pulse" />
        </div>

        <div className="space-y-2">
          <div className="h-4 w-12 bg-gray-400 rounded animate-pulse" />
          <div className="h-10 w-full bg-gray-400 rounded animate-pulse" />
        </div>

        <div className="h-10 w-full bg-blue-300 rounded animate-pulse" />
        <div className="h-10 w-full bg-red-300 rounded animate-pulse" />
      </div>
    </div>
  );
};

export default ProfileSkeleton;
