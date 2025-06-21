import { adsInfo, popularCar } from "@/public/constants";
import AdsCard from "@/public/components/AdsCard";
import PickUpForm from "@/public/components/PickUp";
import CarCard from "@/public/components/CarCard";
import { CgArrowsExchange } from "react-icons/cg";

export default function Home() {
  return (
    <div>
      <section id="ads" className="p-5 md:p-10 md:pt-40 lg:p-15 pt-35 lg:pt-30">
        <div className="flex justify-between flex-wrap flex-col lg:flex-row gap-10 lg:gap-5">
          {adsInfo.map((ad) => (
            <AdsCard
              key={ad.id}
              title={ad.title}
              info={ad.info}
              image={ad.image}
              buttonColor={ad.buttonColor}
            />
          ))}
        </div>
      </section>

      <section id="pickup" className="flex w-full items-center flex-col lg:flex-row p-5 md:p-10 lg:p-15 lg:py-0 lg:gap-10">
        <PickUpForm label="Pick - Up" />
        <div className="flex items-center justify-center w-16 h-16 lg:w-40 bg-primary text-white rounded-md shadow-lg -my-4 lg:m-0 z-2 cursor-pointer">
          <CgArrowsExchange size={40} />
        </div>
        <PickUpForm label="Drop - Off"/>
      </section>

      <section id="popular-car" className="py-5 pl-5 pt-10 md:p-10 lg:p-15">
        <div className="flex justify-between items-center pr-5 md:pr-0">
          <h2 className="title">Popular Car</h2>
          <button className="text-primary font-semibold cursor-pointer">View all</button>
        </div>
        <div className="relative">
          <div className="flex flex-nowrap gap-5 mt-5 lg:mt-10 justify-start overflow-x-auto scrollbar-hide md:flex-wrap md:overflow-x-visible">
          {popularCar.map((car) => (
            <CarCard
              key={car.id}
              carName={car.carName}
              type={car.type}
              carImg={car.carImg}
              oil={car.oil}
              cap={car.cap}
              price={car.price}
            />
          ))}
          <div className="absolute right-0 top-0 h-full w-[150px] bg-gradient-to-l from-white to-transparent z-10 block md:hidden"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
