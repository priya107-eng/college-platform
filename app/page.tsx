"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import CollegeCard from "@/components/CollegeCard";
import EmptyState from "@/components/EmptyState";
import LoadingSpinner from "@/components/LoadingSpinner";
import Footer from "@/components/Footer";
import { College } from "@/types/college";

export default function HomePage() {

  const [colleges, setColleges] =
    useState<College[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [rating, setRating] =
    useState("");

  useEffect(() => {

    async function fetchColleges() {

      try {

        const response =
          await fetch("/api/colleges");

        const data =
          await response.json();

        setColleges(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    }

    fetchColleges();

  }, []);

  const filteredColleges =
    colleges.filter((college) => {

      const matchesSearch =
        college.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesLocation =
        location === "" ||
        college.location === location;

      const matchesRating =
        rating === "" ||
        college.rating >= Number(rating);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesRating
      );
    });

  return (
    <main className="min-h-screen bg-gray-100">

      <Navbar />

      <section className="max-w-7xl mx-auto px-4 py-8">

        <div className="mb-6">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

        </div>

        <FilterBar
          location={location}
          setLocation={setLocation}
          rating={rating}
          setRating={setRating}
        />

        {loading ? (

          <LoadingSpinner />

        ) : filteredColleges.length === 0 ? (

          <EmptyState />

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredColleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
              />
            ))}

          </div>

        )}

      </section>
      <Footer />

    </main>
  );
}