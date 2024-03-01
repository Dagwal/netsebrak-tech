import { useState } from "react";
import PortfolioCard from "./cards/PortfolioCard";
import portfolioItems from "./constants/portfoio-data";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category:any) => {
    setShowCard(category);
  };

  const renderButton = (category:any, label:any) => (
    <li className="mb-1">
      <button
        onClick={() => handleProject(category)}
        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
          showCard === category
            ? "bg-yellow-500 hover:bg-yellow-600 bg-primary text-white"
            : "inbg-sky-500 hover:bg-yellow-700 bg-yellow-200 hover:bg-sky-700hover:text-white"
        }`}
      >
        {label}
      </button>
    </li>
  );

  return (
    <section id="portfolio" className="pt-20 pb-12 ml-5 lg:pt-[120px] lg:pb-[90px] black:bg-black">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4 ">
          <div className="w-full px-4 ">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="text-yellow-600 mb-2 block text-lg font-semibold">
                Our Portfolio
              </span>
              <h2 className="text-black mb-3 text-xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                Our Recent Projects
              </h2>
              <p className="text-gray-500 text-base">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
              {renderButton("all", "All Projects")}
              {renderButton("branding", "Branding")}
              {renderButton("design", "Design")}
              {renderButton("marketing", "Marketing")}
              {renderButton("development", "Development")}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* Portfolio Cards */}
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              ImageHref={item.ImageHref}
              category={item.category}
              title={item.title}
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;