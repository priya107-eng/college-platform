import { College } from "@/types/college";

interface Props {
  college1?: College;
  college2?: College;
}

export default function CompareTable({
  college1,
  college2,
}: Props) {

  if (!college1 || !college2) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-10 text-center text-gray-500 mt-10">
        Select two colleges to compare
      </div>
    );
  }

  return (
    <div className="mt-10 overflow-x-auto">

      <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">

        <thead className="bg-blue-600 text-white">

          <tr>

            <th className="p-5 text-left">
              Feature
            </th>

            <th className="p-5 text-center">

              <div className="flex flex-col items-center gap-3">

                <img
                  src={college1.image}
                  alt={college1.name}
                  className="w-24 h-24 rounded-xl object-cover border-4 border-white"
                />

                <span className="font-bold text-lg">
                  {college1.name}
                </span>

              </div>

            </th>

            <th className="p-5 text-center">

              <div className="flex flex-col items-center gap-3">

                <img
                  src={college2.image}
                  alt={college2.name}
                  className="w-24 h-24 rounded-xl object-cover border-4 border-white"
                />

                <span className="font-bold text-lg">
                  {college2.name}
                </span>

              </div>

            </th>

          </tr>

        </thead>

        <tbody>

          <tr className="border-b">

            <td className="p-5 font-semibold">
              Location
            </td>

            <td className="p-5 text-center">
              {college1.location}
            </td>

            <td className="p-5 text-center">
              {college2.location}
            </td>

          </tr>

          <tr className="border-b bg-gray-50">

            <td className="p-5 font-semibold">
              Rating
            </td>

            <td className="p-5 text-center">
              ⭐ {college1.rating}
            </td>

            <td className="p-5 text-center">
              ⭐ {college2.rating}
            </td>

          </tr>

          <tr className="border-b">

            <td className="p-5 font-semibold">
              Fees
            </td>

            <td className="p-5 text-center">
              💰 {college1.fees}
            </td>

            <td className="p-5 text-center">
              💰 {college2.fees}
            </td>

          </tr>

          <tr className="bg-gray-50">

            <td className="p-5 font-semibold">
              Placements
            </td>

            <td className="p-5 text-center">
              📈 {college1.placements}
            </td>

            <td className="p-5 text-center">
              📈 {college2.placements}
            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}