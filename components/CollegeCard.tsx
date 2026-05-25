import Link from "next/link";
import { College } from "@/types/college";

interface Props {
  college: College;
}

export default function CollegeCard({ college }: Props) {
  return (
    <Link href={`/college/${college.id}`}>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

        <img
          src={college.image}
          alt={college.name}
          className="h-52 w-full object-cover"
        />

        <div className="p-5">

          <h2 className="text-xl font-bold">
            {college.name}
          </h2>

          <p className="text-gray-500 mt-1">
            {college.location}
          </p>

          <div className="mt-4 space-y-2">
            <p>⭐ Rating: {college.rating}</p>
            <p>💰 Fees: {college.fees}</p>
            <p>📈 Placement: {college.placements}</p>
          </div>

        </div>

      </div>

    </Link>
  );
}