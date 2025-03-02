"use client";
import React from "react";

const FoundersMessage = () => {
  return (
    <div className="bg-[#0B1C1D] text-white px-8 py-16 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Side: Text */}
        <div className="md:w-1/2 text-left">
          <p className="text-4xl font-bold mb-5">Message From Our Founders</p>
          
          <p className="text-lg md:text-xl leading-relaxed">
          At AuraDevOps, we believe that technology and innovation have the power to transform industries, drive business growth, and enhance everyday life. Our vision is to make cutting-edge software solutions accessible to everyone, regardless of technical expertise or budget.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-4">
          We founded AuraDevOps with a passion for technology and a commitment to empowering businesses with innovative software solutions. In addition to our development services, we publish the AURA Newsletter, providing valuable insights, industry trends, and updates on the latest technological advancements. Our goal is to deliver real value through cutting-edge solutions while keeping our clients informed and ahead in the ever-evolving tech landscape.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-4">
          At AuraDevOps, we are dedicated to build a customer-centric solutions, we aim to be a leading provider of affordable and effective software services in India and beyond. Additionally, through our AURA Newsletter, we keep our clients and industry professionals informed with the latest trends, insights, and technological advancements.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-4">
            Thank you for choosing AuraDevops International. Together, let's shape the future.
          </p>
        </div>

        {/* Right Side: Founder Cards (Stacked) */}
        <div className="md:w-1/2 flex flex-col justify-center items-center gap-10 mt-10 md:mt-0">
          {/* Founder 1 (Anurag Singh) */}
          <div className="text-center">
            <img
              src="/anirban.jpg" // Replace with actual image path
              alt="ceo"
              className="w-64 lg:h-60 h-72 object-cover mx-auto rounded-lg"
            />
            <div className="bg-black text-white text-lg font-semibold py-3 px-6 mt-2 rounded-md">
            Anirban Adhikary
            <br />
              <span className="text-sm font-normal">CEO</span>
            </div>
          </div>

          {/* Founder 2 (Dharmendra Singh) - Now Below Anurag Singh */}
          <div className="text-center">
            <img
              src="/rajindar.jpg" // Replace with actual image path
              alt="coo"
              className="w-64 lg:h-60 h-72 object-cover mx-auto rounded-lg"
            />
            <div className="bg-black text-white text-lg font-semibold py-3 px-6 mt-2 rounded-md">
            Rajendra Chauhan <br />
              <span className="text-sm font-normal">COO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersMessage;
