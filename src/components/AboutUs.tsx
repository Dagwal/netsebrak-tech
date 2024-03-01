
const AboutUs = () => {
  return (
    <>
      <section id="about" className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="px-14 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block text-lg mx-auto text-center text-yellow-600 font-semibold text-primary">
                  About Us
                </span>
                <h2 className="mb-5 mx-auto text-center text-xl font-bold sm:text-[20px]/[48px]">
                  We are a team of lorem ipsum dolor sit amet.
                </h2>
                <p className="mb-5 text-gray-500 text-center ">
                  our mission is to create cutting-edge solutions that empower individuals and businesses to thrive in the digital age. Welcome aboard!
                </p>
                <p className="mb-8 text-gray-500 text-body-color text-center ">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
