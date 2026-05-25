import Link from "next/link";

export default function Navbar() {

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <Link href="/">

          <div className="flex items-center gap-2">

            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              C
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                CollegeHub
              </h1>

              <p className="text-xs text-gray-500">
                Discover Your Future
              </p>
            </div>

          </div>

        </Link>

        <div className="flex items-center gap-6 font-medium">

          <Link
            href="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            href="/compare"
            className="hover:text-blue-600 transition"
          >
            Compare
          </Link>

        </div>

      </div>

    </nav>
  );
}