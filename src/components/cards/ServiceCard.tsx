const ServiceCard = ({ icon, title, details } : {icon: any, title: any, details: any}) => {
    return (
      <>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-9 rounded-[20px] p-10 shadow-md hover:shadow-lg md:px-7 ml-3 xl:px-10">
            <div className="bg-[#d09d1d] mb-8 flex h-[60px] w-[60px] items-center justify-center rounded-2xl ">
              {icon}
            </div>
            <h4 className=" text-xl font-semibold text-black ">
              {title}
            </h4>
            <p>{details}</p>
          </div>
        </div>
      </>
    );
  };

  export default ServiceCard;