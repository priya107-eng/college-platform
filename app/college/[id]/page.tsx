import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { prisma } from "@/lib/prisma";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CollegeDetailPage({
  params,
}: Props) {

  const { id } = await params;

  const college =
    await prisma.college.findUnique({
      where: {
        id: Number(id),
      },
    });

  if (!college) {
    return (
      <div className="p-10 text-center text-red-500">
        College not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">

      <Navbar />

      <section className="max-w-6xl mx-auto px-4 py-10">

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <img
            src={college.image}
            alt={college.name}
            className="w-full h-80 object-cover"
          />

          <div className="p-8">

            <h1 className="text-4xl font-bold">
              {college.name}
            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              {college.location}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">

              <div className="bg-blue-50 p-5 rounded-xl">

                <h3 className="font-semibold text-lg">
                  Rating
                </h3>

                <p className="text-2xl mt-2">
                  ⭐ {college.rating}
                </p>

              </div>

              <div className="bg-green-50 p-5 rounded-xl">

                <h3 className="font-semibold text-lg">
                  Fees
                </h3>

                <p className="text-2xl mt-2">
                  💰 {college.fees}
                </p>

              </div>

              <div className="bg-purple-50 p-5 rounded-xl">

                <h3 className="font-semibold text-lg">
                  Placements
                </h3>

                <p className="text-2xl mt-2">
                  📈 {college.placements}
                </p>

              </div>

            </div>

            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-4">
                Overview
              </h2>

              <p className="text-gray-700 leading-7">
                {college.description}
              </p>

            </div>

            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-4">
                Courses Offered
              </h2>

              <div className="flex flex-wrap gap-4">

                {college.courses.map((course) => (
                  <span
                    key={course}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                  >
                    {course}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}