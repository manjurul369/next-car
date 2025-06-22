import Image from "next/image";
import { recommendedCar, popularCar } from "@/public/constants";
import { notFound } from "next/navigation";
import CarGallery from "@/public/components/CarGallery";
import CarDetailsCard from "@/public/components/CarDetailsCard";

export default async function Page({ params }) {
  const { slug } = await params;
  const carId = Number(slug);

  const allCars = [...recommendedCar, ...popularCar];
  const car = allCars.find((c) => c.id === carId);

  if (!car) {
    notFound();
  }

  return (
    <div className="mt-20 px-10 py-20 md:p-20 lg:p-30">
      <section className="flex flex-col lg:flex-row gap-10">
        <CarGallery carImg={car.carImg} thumbImg={car.thumbImg} />
        <CarDetailsCard carName={car.carName} 
          rattingCount={car.rattingCount}
          carDetails={car.carDetails}
          type={car.type}
          cap={car.cap}
          steering={car.steering}
          oil={car.oil}
          price={car.price} />
      </section>
    </div>
  );
}