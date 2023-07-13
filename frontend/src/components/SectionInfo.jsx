import { Blob } from "../assets/icons/iconsData";
import { StarIcon, UserIcon, BoltIcon } from "@heroicons/react/24/outline";
import { ImageHamburger } from "../assets/image/imageData";

const SectionInfo = () => {
  return (
    <section className="w-full py-12">
      <div className="container relative mx-auto">
        <img
          src={Blob}
          alt=""
          className="absolute -top-20 left-3/4 h-44 w-44"
        />
        <div className="flex flex-col items-center gap-y-8 rounded-2xl bg-[#FEF9E2] px-10 py-20 md:flex-row">
          <div className="mx-4 flex-1 md:mx-7">
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Choose what you want, select a pick up time
            </h2>
            <p>
              It&apos;s about the journey, not the destination. That&apos;s why
              we took our name Everything that makes us special
            </p>
            <img src={ImageHamburger} alt="" className="mx-auto md:mx-0" />
          </div>
          <div className="flex-1">
            <div className="mb-6 mr-5 flex max-w-[350px] gap-x-3 rounded-xl bg-white px-5 py-6">
              <BoltIcon className="h-6 w-6 text-[#AD2020]" />
              Your order us fast and delivery
            </div>
            <div className="mb-6 ml-5 flex max-w-[350px] gap-x-3 rounded-xl bg-white px-5 py-6">
              <StarIcon className="h-6 w-6 text-[#AD2020]" />
              Your order us fast and delivery
            </div>
            <div className="mr-5 flex max-w-[350px] gap-x-3 rounded-xl bg-white px-5 py-6">
              <UserIcon className="h-6 w-6 text-[#AD2020]" />
              Your order us fast and delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionInfo;
