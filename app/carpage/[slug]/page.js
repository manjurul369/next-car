import { recommendedCar, popularCar } from "@/public/constants";
import { notFound } from "next/navigation";
import CarGallery from "@/public/components/CarGallery";
import CarDetailsCard from "@/public/components/CarDetailsCard";
import Link from "next/link";
import CarCard from "@/public/components/CarCard";
import ReviewSection from "@/public/components/ReviewSection";

export default async function Page({ params }) {
  const { slug } = await params;
  const carId = Number(slug);

  const allCars = [...recommendedCar, ...popularCar];
  const car = allCars.find((c) => c.id === carId);

  if (!car) {
    notFound();
  }

  return (
    <div className="mt-20 px-10 py-20 md:p-20 lg:px-30 lg:py-15">
      <section className="flex flex-col lg:flex-row gap-10">
        <CarGallery carImg={car.carImg} thumbImg={car.thumbImg} />
        <CarDetailsCard carName={car.carName} 
          rattingCount={car.rattingCount}
          star={car.star}
          carDetails={car.carDetails}
          type={car.type}
          cap={car.cap}
          steering={car.steering}
          oil={car.oil}
          price={car.price}
          oldPrice={car.oldPrice} />
      </section>

      <ReviewSection car={car} />

      <section id="recent-car" className="pt-20">
        <div className="flex justify-between items-center pr-5 md:pr-0">
          <h2 className="title">Recent Car</h2>
          <button className="text-primary font-semibold cursor-pointer">View all</button>
        </div>
        <div className="relative">
          <div className="flex flex-nowrap gap-5 mt-5 lg:mt-10 justify-start overflow-x-auto scrollbar-hide md:flex-wrap md:overflow-x-visible">
          {popularCar.map((car) => (
            <Link href={`/carpage/${car.id}` } key={car.id}><CarCard
              key={car.id}
              carName={car.carName}
              type={car.type}
              carImg={car.carImg}
              oil={car.oil}
              cap={car.cap}
              price={car.price}
            />
            </Link>
          ))}
          <div className="absolute right-0 top-0 h-full w-[150px] bg-gradient-to-l from-white to-transparent z-10 block md:hidden"></div>
          </div>
        </div>
      </section>
    </div>
  );
}