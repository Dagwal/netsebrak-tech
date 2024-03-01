import { PortfolioCardProps } from "../../types/portfolio-card";

const PortfolioCard = ({
    showCard,
    category,
    ImageHref,
    title,
    button,
    buttonHref,
  }:PortfolioCardProps) => {
    return (
      <>
        <div
          className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
            showCard === "all" || showCard === category.toLowerCase()
              ? "block"
              : "hidden"
          }`}
        >
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-[10px]">
              <img src={ImageHref} alt="portfolio" className="w-full" />
            </div>
            <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-[34px] px-3 text-center shadow-portfolio black:shadow-box-black">
              <span className="text-primary mb-2 block text-sm font-medium">
                {category}
              </span>
              <h3 className="text-black mb-5 text-xl font-bold">{title}</h3>
              <a
                href={buttonHref}
                className="text-body-color  hover:bg-yellow-600 outline outline-offset-0  inline-block rounded-md border border-stroke py-[10px] px-7 text-sm font-medium transition hover:text-white"
              >
                {button}
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };

export default PortfolioCard;