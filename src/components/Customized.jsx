"use clint"
import Link from "next/link";
import React from "react";

function CustomService() {
  // Card data stored in an array of objects
  const cardsData = [
    {
      id: 1,
      title: "Innovative Software Solutions",
      text: "We offer innovative software solutions to help your business succeed in the digital world.",
      image: "https://www.techopedia.com/wp-content/uploads/2023/02/istock-1173805290-1.jpeg",
      
    },
    {
      id: 2,
      title: "Expert Development Team",
      text: "Our team of experts will create tailored solutions to meet your specific requirements and needs.",
      image: "https://i.pinimg.com/736x/e8/ba/54/e8ba54bef8388e2c0ab57114267d41e3.jpg",
      
    },
    {
      id: 3,
      title: "Quality Assurance",
      text: "Our team ensures high-quality deliverables for all our projects.",
      image: "https://img.freepik.com/premium-photo/qa-quality-assurance-quality-control-concept_31965-1740.jpg",
      
    },
    {
      id: 4,
      title: "Innovative Approach",
      text: "We bring creativity and innovation to every project we undertake",
      image: "https://www.workitdaily.com/media-library/innovation.jpg?id=29525047&width=1200&height=600&coordinates=0%2C28%2C0%2C28",
      
    },
  ];

  return (
    <div className="lg:p-24 p-12">
    <h2 className="text-3xl font-bold text-gray-800 text-center">Customized Development Services</h2>
        <p className="text-gray-600 m-4 text-center" >
        Specialized in app and software development with years of experience, providing customized solutions.
        </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
      
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="bg-white shadow-md rounded-lg overflow-hidden mb-6"
        >
          {/* Image Section */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover"
          />
          {/* Card Body */}
          <div className="p-4">
            <h5 className="text-lg font-bold mb-2">{card.title}</h5>
            <p className="text-gray-700 mb-4">{card.text}</p>
          
          </div>
        </div>
      ))}
    </div>
    <div className="mt-4 text-center">
          <Link href={"/Contact"}>
            <button className="text-white rounded-full p-5 mt-5 px-10 font-bold border-2 bg-blue-800 hover:bg-blue-900 hover:shadow-2xl ">
              Contact 
            </button>
          </Link>
        </div>
        <hr className=" mt-7 " />
    </div>
  );
}

export default CustomService;
