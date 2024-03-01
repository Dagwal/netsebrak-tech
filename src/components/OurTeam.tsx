import TeamCard from "./cards/TeamCard";
import teamMembers from "./constants/team-members";

const Team = () => {
  return (
    <section id="ourteam" className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 text-yellow-600 block text-lg font-semibold text-primary">
                Our Team
              </span>
              <h2 className="mb-3 text-xl font-bold leading-[1.2] text-black sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-gray-500 black:text-black-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              profession={member.profession}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
