'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const data = [
  {
    quote: "Aura DevOps exceeded our expectations with their services.",
    name: "Ryan Bradford",
    title: "Los Angeles",
  },
  {
    quote: "We are extremely pleased with the customized app developed by Aura DevOps.",
    name: "Charles Cyrus",
    title: "New York",
  },
  {
    quote: "Success is not the key to happiness. Happiness is the key to success.",
    name: "Albert Schweitzer",
    title: "Philosopher and Physician",
  },
];

function Movingcards() {
  return (
    <div className=" h-[30rem] md:h-[20rem] lg:h-[20rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col  items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10 text-black">Happy Customers</h2>
        <div className="flex justify-center w-full overflow-hidden p-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-8xl">
            <InfiniteMovingCards
                items={data}
                direction="right"
                speed="normal"
      />
            </div>
        </div>
    </div>
  )
}

export default Movingcards