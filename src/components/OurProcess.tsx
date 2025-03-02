"use client"
import React from "react";

const OurProcess = () => {
  const steps = [
    {
      title: "Planning",
      description:
        "We define the web app's purpose, target audience, and desired user experience.",
    },
    {
      title: "Design",
      description:
        "Our team creates a visual structure and interactive prototype for user feedback.",
    },
    {
      title: "Development",
      description:
        "Our experts build UI and server-side functionality to bring your idea to life.",
    },
    {
      title: "Testing",
      description:
        "Our testing team ensures the web app functions flawlessly across all devices.",
    },
    {
      title: "Launch",
      description:
        "Our professionals ensure the web app is launched on-time without any glitches.",
    },
    {
      title: "Maintenance",
      description:
        "Lastly, our support team ensures continuous support & maintenance for future improvements.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Process</h2>
        <p className="text-gray-600 mt-4">
          Here is a streamlined overview of our custom web app development
          process:
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg p-6"
            >
              {/* Icon */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-100 rounded-full p-3 shadow-md">
                <div className="text-yellow-500 text-xl font-bold">{index + 1}</div>
              </div>
              {/* Content */}
              <h3 className="mt-8 text-lg font-bold text-gray-800">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
