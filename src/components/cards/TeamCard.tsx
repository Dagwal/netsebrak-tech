import { TeamCardProps } from "../../types/team-card";
const TeamCard = ({ imageSrc, name, profession }: TeamCardProps) => {
    return (
      <>
        <div className="w-full px-4 md:w-1/2 xl:w-1/4">
          <div className="mx-auto mb-10 w-full max-w-[370px]">
            <div className="relative overflow-hidden rounded-lg">
              <img src={imageSrc} alt="" className="w-full" />
              <div className="absolute bottom-5 left-0 w-full text-center">
                <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5">
                  <h3 className="text-yellow-600 font-semibold">
                    {name}
                  </h3>
                  <p className="text-xs text-body-color text-gray-500">
                    {profession}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default TeamCard;