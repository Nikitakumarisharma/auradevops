"use client";
import React, { useState } from "react";

const CompanyIntro = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Object storing all the content
  const content = {
    whoWeAre: {
      title: "WHO WE ARE",
      description: `
        AuraDevops is a specialized app and software development company with years of experience, providing services and customized solutions to meet client requirements.
      `,
      image:
        "https://th.bing.com/th/id/OIP.24Y8ECt_CpUIuRGTl8FCRAHaE3?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", // Replace with your image URL
    },
    howWeAreDifferent: {
      title: "HOW WE ARE DIFFERENT",
      description:
        "We are different in many ways. First of all, we stick to quality & related issues, whatever it may requires, to deal with. Secondly, the key things are, we have control of all the servers & related issues directly into our own, so that we can provide solutions instantly and many more.",
      image:
        "https://th.bing.com/th/id/OIP.EBzGcNmb_hFOKu8x294MzwHaHk?rs=1&pid=ImgDetMain",
    },
    howWeServe: {
      title: "HOW WE SERVE",
      description:
        "Quality should be the king, & the rest will follow through it.You can see the service, & decide how we serve.",
      image:
        "https://th.bing.com/th/id/OIP.un5WkdbUd41cpOE2ydO9SwHaHa?rs=1&pid=ImgDetMain",
    },
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center py-16 px-8">
      <h1 className="lg:text-4xl  text-xl font-bold mb-6">
        A BRIEF INTRODUCTION OF OUR COMPANY.
      </h1>
      <div className="w-full max-w-4xl space-y-4">
        {/* Render dropdowns dynamically */}
        {Object.keys(content).map((key) => (
          <div key={key}>
            <button
              className="w-full bg-teal-500 text-left px-4 py-2 rounded-lg flex justify-between items-center"
              onClick={() => toggleSection(key)}
            >
              {content[key].title}
              <span>{activeSection === key ? "▲" : "▼"}</span>
            </button>
            {activeSection === key && (
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <p className="text-sm mt-2">{content[key].description}</p>
                {content[key].image && (
                  <div className="mt-4 flex justify-center">
                    <img
                      src={content[key].image}
                      alt={content[key].title}
                      className="w-16 h-16"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyIntro;
