"use client";
import React from "react";
import Link from "next/link";
import ExploreButton from "@/components/downloadbtn"

function HeroSection() {
  return (
    <div className="p-4 relative z-10 w-full text-center mt-24 max-w-">
      <h1 className=" md:mt-0 text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-black">
        Expert App <br />
        Development Services
      </h1>
      <p className="mt-4 font-normal text-xl text-black mx-auto">
        Specialized in customized app development with years of experience in
        the industry.
      </p>

      <div className="mt-10 flex justify-center items-center">
        <Link href={"/Services"}>
          <ExploreButton />
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
