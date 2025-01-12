import React from "react";

const services = [
  {
    title: "Customized App Development",
    description: "Tailored solutions based on clients' specific requirements.",
  },
  {
    title: "Web Development Services",
    description:
      "Providing top-notch software development solutions for businesses.",
  },
  {
    title: "Mobile App Development",
    description:
      "Developing user-friendly mobile applications with seamless functionality across platforms.",
  },
];

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:px-16 px-8 bg-white lg:mt-24 my-16">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative w-full h-64 duration-500 group overflow-hidden rounded-lg bg-gray-200 text-blue-900 p-4 flex flex-col justify-evenly hover:bg-white"
        >
          {/* Background Effects */}

          <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-orange-400 right-1 -top-12"></div>
          <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-orange-500 rounded-full group-hover:-translate-x-12"></div>

          {/* Content */}
          <div className="z-10 flex flex-col justify-evenly w-full h-full">
            <span className="text-3xl font-bold">{service.title}</span>
            <p className="text-xl">{service.description}</p>
            {/* Optional Button */}
            {/* <button className="hover:bg-neutral-200 bg-neutral-50 rounded text-neutral-800 font-extrabold w-full p-3">
              See more
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
