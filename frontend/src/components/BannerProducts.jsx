import items from "../assets/icons/iconsData";

const BannerProducts = () => {
  return (
    <div className="container mx-auto flex justify-around gap-x-6 pb-12">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-xl border px-7 py-5 text-center"
        >
          <img src={item.icon} alt={item.label} className="mb-3 max-h-14 max-w-14 " />

          <p className="text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default BannerProducts;
