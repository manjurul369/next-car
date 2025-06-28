import Button from './Button';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function CarDetailsCard({
    carName, star, rattingCount, carDetails, type, cap, steering, oil, price, oldPrice
}) {
  
  const filledStars = [];
  const emptyStars = [];
  for (let i = 0; i < star; i++) {
    filledStars.push(<FaStar key={`filled-${i}`} />);
  }
  for (let i = 0; i < 5-star; i++) {
    emptyStars.push(<FaRegStar key={`empty-${i}`} />);
  }


  return (
    <div className='w-full lg:w-1/2 flex flex-col gap-2 bg-white p-6 lg:p-15 md:p-10 rounded-lg shadow-md'>
      <h2 className='text-3xl lg:text-4xl font-bold'>{carName}</h2>
      <div className='mt-0 lg:mt-2'>
        <div className='flex items-center gap-2'>
          <span className='text-yellow-500 flex gap-1'>
            {filledStars}
            {emptyStars}
          </span>
          <span className='text-gray-400'>{rattingCount}+ Reviewer</span>
        </div>
      </div>
      <p className='text-md my-4 lg:my-8 font-regular leading-7 text-slate-gray'>{carDetails}</p>
      <div className='flex justify-between items-center gap-10'>
        <div className='w-1/2 flex justify-between font-semibold'>
          <span className='text-slate-gray'>Type Car</span>
          <span>{type}</span>
        </div>
        <div className='w-1/2 flex justify-between font-semibold'>
          <span className='text-slate-gray'>Capacity</span>
          <span>{cap}</span>
        </div>
      </div>
      <div className='flex justify-between items-center gap-10'>
        <div className='w-1/2 flex justify-between font-semibold'>
          <span className='text-slate-gray'>Steering</span>
          <span>{steering}</span>
        </div>
        <div className='w-1/2 flex justify-between font-semibold'>
          <span className='text-slate-gray'>Gasoline</span>
          <span>{oil}</span>
        </div>
      </div>
      <div className='flex justify-between items-center mt-4 lg:mt-10'>
        <div className='flex flex-col gap-1'>
          <span className='text-3xl font-bold'>${price.toFixed(2)}/<span className='text-sm text-slate-gray'>days</span></span>
          <span className='text-lg font-bold text-slate-gray line-through'>${oldPrice.toFixed(2)}</span>
        </div>
        <Button label="Rent Now" size='xl' />
      </div>
    </div>
  )
}
