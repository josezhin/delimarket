import { PlayIcon } from "@heroicons/react/24/outline";
import { Burger } from "../assets/image/imageData";
import { GusanoYellow, GusanoGreen, Pizza } from "../assets/icons/iconsData";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-8 py-12 md:flex-row">
        {/* Content */}
        <div className="flex-1">
          <h1 className="mb-2 text-5xl font-bold  lg:text-6xl">
            We will deliver the best burgers in town
          </h1>
          <p className="mb-3 md:mb-5">
            we prepare healthy food for you with a taste that will never !be
            repeated. Order now and have ir delivered
          </p>

          <div className="flex items-center justify-center gap-x-8 md:justify-start">
            <div className="flex items-center justify-center gap-x-5">
              <p className="text-sm font-semibold">How to order food !</p>

              <span className="rounded-full p-4 shadow-md">
                <PlayIcon className="h-6 w-6" />
              </span>
            </div>

            <button className="h-12 rounded-xl bg-[#D5282A] px-5 text-sm font-medium text-white">
              Get Stated
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex flex-1 items-center justify-center">
          <img src={Pizza} alt="" className="absolute max-w-[450px]" />
          <img
            src={GusanoYellow}
            alt=""
            className="inset-y-2/5 absolute -left-10 max-w-[230px]"
          />

          <img
            src={GusanoGreen}
            alt=""
            className="absolute inset-y-2/4 -right-10 max-w-[230px]"
          />

          <img src={Burger} alt="" className="z-10" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
