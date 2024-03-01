import services from "./constants/services-data";
import ServiceCard from "./cards/ServiceCard";
const Service = () => {
  return (
    <section id="services" className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 text-yellow-600 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 text-xl font-bold leading-[1.2] text-black black:text-white sm:text-4xl md:text-[30px]">
                What We Offer
              </h2>
              <p className="text-gray-500 text-body-color black:text-black-6">
                There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Service;