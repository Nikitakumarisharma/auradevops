import React from "react";

const services = [
  {
    title: "Customized App Development",
    description:
      "Customized app development creates tailored software solutions, enhancing user experience and meeting specific business needs through innovative design and functionality.",
    image: "/app.png", // Replace with actual image path
  },
  {
    title: "Aura Newsletter Publication",
    description:
      "Aura Newsletter delivers insightful articles, updates, and resources, fostering community engagement and promoting well-being through curated content and expert contributions.",
    image: "/newsletter.png", // Replace with actual image path
  },
];

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:px-16 px-8 bg-white lg:mt-24 my-16">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative w-full duration-500 group overflow-hidden rounded-lg bg-gray-200 text-blue-900 p-6 flex flex-col justify-evenly hover:bg-white border border-gray-300 shadow-md"
        >
          {/* Background Effects */}
          <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-orange-400 right-1 -top-12"></div>
          <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-orange-500 rounded-full group-hover:-translate-x-12"></div>

          {/* Image (Now Full & Uncropped) */}
          <div className="w-full h-auto flex justify-center mb-4">
            <img
              src={service.image}
              alt={service.title}
              className="w-full max-h-56 object-contain rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="z-10 flex flex-col justify-evenly w-full h-full">
            <span className="text-2xl font-bold">{service.title}</span>
            <p className="text-lg text-gray-700">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
