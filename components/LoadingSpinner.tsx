import SkeletonCard from "./SkeletonCard";

export default function LoadingSpinner() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />

    </div>
  );
}