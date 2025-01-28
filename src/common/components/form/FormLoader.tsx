const SkeletonFormLoader = () => {
  const commonDiv = (
    <div className="flex flex-col">
      <div className="h-4 bg-gray-300 rounded mb-2 w-1/2 max-w-xs dark:bg-gray-700" />
      <div className="h-2.5 bg-gray-300 rounded dark:bg-gray-700 w-full max-w-xs" />
    </div>
  );
  return (
    <div className=" flex justify-center">
      <div role="status" className="animate-pulse space-y-4 p-4 w-1/3">
        {/* Text Input Skeleton */}
        {commonDiv}

        {/* Email Input Skeleton */}
        {commonDiv}

        {/* Select Input Skeleton */}
        {commonDiv}

        {/* Checkbox Input Skeleton */}
        <div className="flex items-center">
          <div className="h-4 w-4 bg-gray-300 rounded dark:bg-gray-700 mr-2" />
          <div className="h-2.5 bg-gray-300 rounded dark:bg-gray-700 w-full max-w-xs" />
        </div>

        {/* Submit Button Skeleton */}
        <div className="h-10 bg-gray-300 rounded dark:bg-gray-700 mx-auto" />

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
export default SkeletonFormLoader;
