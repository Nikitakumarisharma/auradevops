import Link from "next/link";
import React from "react";

function NewsLetter() {
  // Card data stored in an array of objects
  const cardsData = [
    {
      id: 1,
      title: "CBC",
      text: "CBC Weekly – Your Daily Dose of Market Chaos! Because who doesn’t love waking up to stock market drama every single weekday?.Join us for insights and updates that keep you informed and engaged in the financial world.",
      image: "/cbc.png",
      link: "https://cbcdaily.beehiiv.com/",
      listItems: [
        "🔥 Monday to Friday Madness: Will stocks crash, rally, or just confuse everyone? We decode the chaos.",
        "📈 Winners, Losers & Wildcards: Apple, Tesla, Meta—who’s up, who’s down, who’s lost the plot?",
        "💡 Smart Money Moves: Because guessing isn’t a strategy."
      ]
    },
    {
      id: 2,
      title: "AI Junction",
      text: "Whether you are an AI enthusiast, a developer, a researcher, or a curious learner, you will find topics such as AI tools, AI updates, AI news, and AI tech updates in this newsletter. Subscribe now and join the community of AI lovers!",
      image: "/aiJunction.jpg",
      link: "https://ai-junction.beehiiv.com/",
      listItems: [
        "🔥 AI Tools Spotlight: Discover powerful AI tools transforming industries effortlessly.",
        "🚀 Latest AI Updates: Stay ahead with cutting-edge advancements in AI technology.",
        "🧠 AI News Digest: Get the biggest AI breakthroughs delivered straight to you!"
      ]
    },
    {
      id: 3,
      title: "The Telegraph",
      text: "The Telegraph Weekly – Your Front-Row Seat to the World! ahead of the curve with a newsletter that delivers bold insights, fresh updates, and game-changing trends—all in one place, every Monday, Wednesday, and Friday.",
      image: "/telegraph.png",
      link: "https://telegraph.beehiiv.com/",
      listItems: [
        "💰 Money Moves: Market shake-ups, corporate power plays & economic buzz.",
        "🌍 Global Pulse: Diplomacy, policy twists & world-changing events.",
        "🎭 Culture & Style: Fashion waves, entertainment scoops & consumer must-knows.",
      ]
    },
  ];

  return (
    <div className="lg:p-24 p-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Aura Newsletter Publication</h2>
      <p className="text-gray-600 m-4 text-center">
      Stay updated with the latest AI tools, innovations, news, and trends shaping the future of technology! 
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 ">
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
              {/* List Section */}
              <ul className="list-inside mb-10 ml-2">
                {card.listItems.map((item, index) => (
                  <li key={index} className="text-gray-700 mb-3">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <Link href={card.link}>
                <button className="bg-blue-900 text-white px-4 py-2 rounded">Why Wait? Explore More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsLetter;