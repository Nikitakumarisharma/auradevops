"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const data = [
  {
    quote:
      "Aura DevOps exceeded our expectations with their top-notch software development services.",
    name: "Ryan Bradford",
    title: "Los Angeles",
  },
  {
    quote: "We are extremely pleased with the customized app developed by Aura DevOps.",
    name: "Charles Cyrus",
    title: "New York",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
    name: "Albert Schweitzer",
    title: "Philosopher and Physician",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    name: "Theodore Roosevelt",
    title: "26th President of the United States",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    name: "Albert Eiinstein",
    title: "Theoretical Physicist",
  },
];

function Movingcards() {
  return (
    <div className="flex flex-col antialiased bg-white   items-center justify-center relative overflow-hidden ">

      <h2 className="text-3xl lg:text-4xl font-bold text-center text-black lg:mb-8  ">
      Happy Customers
      <p className="text-gray-800 lg:text-xl text-[15px]">Read what our satisfied clients have to say about our services.</p>
      </h2>

      <InfiniteMovingCards items={data} direction="right" speed="slow" />
    </div>
  );
}

export default Movingcards;
