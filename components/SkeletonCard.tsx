export default function SkeletonCard() {

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">

      <div className="h-52 bg-gray-300" />

      <div className="p-5">

        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />

        <div className="h-4 bg-gray-200 rounded w-1/2 mb-6" />

        <div className="space-y-3">

          <div className="h-4 bg-gray-200 rounded" />

          <div className="h-4 bg-gray-200 rounded" />

          <div className="h-4 bg-gray-200 rounded" />

        </div>

      </div>

    </div>
  );
}