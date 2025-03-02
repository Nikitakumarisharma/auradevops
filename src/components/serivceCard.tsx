import React from "react";

const services = [
  {
    title: "Customized App Development",
    description: "Customized app development creates tailored software solutions, enhancing user experience and meeting specific business needs  through innovative design and functionality.",
  },
  {
    title: "Aura Newsletter Publication",
    description:
      "Aura Newsletter delivers insightful articles, updates, and resources, fostering community engagement and promoting well-being through curated content and expert contributions.",
  },
  
];

const ServiceCard = () => {
  return (

    
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:px-16 px-8 bg-white lg:mt-24 my-16">
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
