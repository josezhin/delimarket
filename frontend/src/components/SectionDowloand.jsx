// import { Phone } from "../assets/image/imageData";

const SectionDowloand = () => {
  return (
    <section className="w-full py-12">
      <div className="container relative mx-auto">
        <div className="flex flex-col items-center gap-y-8 rounded-2xl bg-[#FEF3F0] px-10 py-20 md:flex-row">
          <div className="flex-1">
            <img
              // src={Phone}
              alt=""
              className="h-[600px] md:-top-20 md:left-40 lg:absolute"
            />
          </div>
          <div className="flex-1">
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Earn points every time you order online
            </h2>
            <p className="mb-5">
              as well know and are every busy all days advice you. advice you to
              callus of before arriving, so we can guarante
            </p>
            <span>Food ordening app download linsks</span>

            <div className="mt-5 flex justify-center gap-x-5">
              <button className="flex rounded-xl bg-black px-3 py-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    fillRule="evenodd"
                    d="M14.605 5.922c.61-.758 1.074-1.829.906-2.922-.998.067-2.165.68-2.846 1.48-.621.726-1.131 1.804-.932 2.85 1.092.034 2.218-.595 2.872-1.408zM20 16.206c-.437.936-.647 1.354-1.21 2.183-.785 1.157-1.892 2.597-3.264 2.608-1.219.012-1.533-.768-3.188-.758-1.654.008-1.999.773-3.22.76-1.371-.01-2.42-1.31-3.205-2.467-2.196-3.233-2.427-7.027-1.073-9.045.964-1.433 2.483-2.271 3.91-2.271 1.454 0 2.368.77 3.571.77 1.167 0 1.878-.773 3.558-.773 1.272 0 2.62.67 3.58 1.826-3.145 1.666-2.636 6.006.541 7.167z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                App Store
              </button>
              <button className="flex rounded-xl bg-black px-3 py-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    fillRule="evenodd"
                    d="M2.653 22.965C2.257 22.86 2 22.472 2 21.872V2.067c0-.556.218-.93.563-1.067l9.853 11.037-9.763 10.928zm1.356-.42l11.86-6.64-2.889-3.236-8.971 9.876zM15.95 8.082L4.256 1.532l8.741 9.855 2.954-3.305zm.794.444l4.581 2.565c.868.486.876 1.269 0 1.76l-4.697 2.629-3.064-3.454 3.18-3.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Google play
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDowloand;
