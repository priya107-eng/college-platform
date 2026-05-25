"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import CompareTable from "@/components/CompareTable";

import { colleges } from "@/data/colleges";
import Footer from "@/components/Footer";

export default function ComparePage() {

  const [college1Id, setCollege1Id] =
    useState("");

  const [college2Id, setCollege2Id] =
    useState("");

  const college1 = colleges.find(
    (college) => college.id === Number(college1Id)
  );

  const college2 = colleges.find(
    (college) => college.id === Number(college2Id)
  );

  return (
    <main className="min-h-screen bg-gray-100">

      <Navbar />

      <section className="max-w-6xl mx-auto px-4 py-10">

        <h1 className="text-4xl font-bold mb-8">
          Compare Colleges
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <select
            value={college1Id}
            onChange={(e) =>
              setCollege1Id(e.target.value)
            }
            className="p-4 rounded-xl border bg-white"
          >

            <option value="">
              Select First College
            </option>

            {colleges.map((college) => (
              <option
                key={college.id}
                value={college.id}
              >
                {college.name}
              </option>
            ))}

          </select>

          <select
            value={college2Id}
            onChange={(e) =>
              setCollege2Id(e.target.value)
            }
            className="p-4 rounded-xl border bg-white"
          >

            <option value="">
              Select Second College
            </option>

            {colleges.map((college) => (
              <option
                key={college.id}
                value={college.id}
              >
                {college.name}
              </option>
            ))}

          </select>

        </div>

        <CompareTable
          college1={college1}
          college2={college2}
        />

      </section>
      <Footer />
    </main>
  );
}