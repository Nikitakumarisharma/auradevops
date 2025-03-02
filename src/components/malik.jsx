"use client";
import React from "react";

const FoundersMessage = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
    <h2 className="text-3xl font-bold mb-6 text-center">Message From Our Founders</h2>
    <div className="grid grid-cols-1 gap-8 items-center">
      {/* Founder 1 */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <img
          src="/anirban.jpg"
          alt="Founder 1"
          className="w-56 h-72 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h3 className="text-xl font-semibold">Anirban Adhikary</h3>
          <p className="text-gray-300">CEO</p>
          <p className="mt-2 text-gray-400">
          Anirban Adhikary, a London-educated entrepreneur and marketing specialist, co-founded Auradevops International to make knowledge more accessible. With a Business Management degree from Middlesex University and expertise in Financial Management from Université de Genève, he has gained diverse experience in marketing, sales, and digital innovation across India and London.
          </p>
        </div>
      </div>

      {/* Founder 2 */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <img
          src="/rajindar.jpg"
          alt="Founder 2"
          className=" h-72 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h3 className="text-xl font-semibold">Rajindar Chauhan</h3>
          <p className="text-gray-300">COO</p>
          <p className="mt-2 text-gray-400">
          Rajendra Chavhan, a computer science graduate with a passion for innovation, co-founded Auradevops to empower businesses through technology. Fascinated by how things work from a young age, he turned his curiosity into a mission—building reliable, forward-thinking tech solutions that help businesses navigate the ever-evolving digital world with confidence.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FoundersMessage;
