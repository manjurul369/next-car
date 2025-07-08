"use client";

import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';
import Reviews from './Reviews';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function ReviewSection({ car }) {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [height, setHeight] = useState('0px');
  const [shouldShowAll, setShouldShowAll] = useState(false);
  const contentRef = useRef(null);
  const measureRef = useRef(null);

  useEffect(() => {
    if (showAllReviews) {
      setShouldShowAll(true);
      if (contentRef.current) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      }
    } else {
      if (measureRef.current) {
        setHeight(`${measureRef.current.scrollHeight}px`);
      }
      const timeout = setTimeout(() => setShouldShowAll(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [showAllReviews, car.reviews.length]);

  useEffect(() => {
    if (shouldShowAll && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [shouldShowAll, car.reviews.length]);

  return (
    <section>
      <div className="w-full bg-white rounded-lg shadow-md p-6 lg:p-10 xl:p-15 mt-10">
        <div className="flex items-center gap-2 md:gap-4">
          <h2 className="lg:text-3xl text-2xl font-bold">Reviews</h2>
          <Button label={car.reviews.length} size='sm' />
        </div>

        <div
          ref={measureRef}
          style={{
            position: 'absolute',
            visibility: 'hidden',
            pointerEvents: 'none',
            height: 'auto',
            overflow: 'hidden',
            zIndex: -1,
          }}
          aria-hidden="true"
        >
          {car.reviews.slice(0, 2).map((review, i) => (
            <Reviews reviewDetails={review} key={i} />
          ))}
        </div>

        <div
          className="mt-5 transition-all duration-500 ease-in-out overflow-hidden"
          style={{ maxHeight: height, opacity: 1 }}
          ref={contentRef}
        >
          {(shouldShowAll ? car.reviews : car.reviews.slice(0, 2)).map((review, i) => (
            <Reviews reviewDetails={review} key={i} />
          ))}
        </div>

        <div className="flex justify-center mt-5">
          {car.reviews.length > 2 && !showAllReviews ? (
            <h2 onClick={() => setShowAllReviews(true)} className='flex items-center gap-1 text-slate-gray cursor-pointer'>
              View all <IoIosArrowDown />
            </h2>
          ) : (
            car.reviews.length > 2 && (
              <h2
                onClick={() => setShowAllReviews(false)}
                className='flex items-center gap-1 text-slate-gray cursor-pointer'
              >
                <IoIosArrowUp />
              </h2>
            )
          )}
        </div>
      </div>
    </section>
  );
}