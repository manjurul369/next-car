"use client";

import React, { useState } from 'react';

export default function PickUpForm({label}) {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <div className="flex justify-center w-full bg-gray-100 font-sans">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-4xl">
        <div className="flex items-center mb-6">
          <div className='flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 mr-2'>
            <span className="w-3 h-3 rounded-full bg-blue-600"></span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 leading-0">{label}</h2>
        </div>

        <div className="flex gap-2">
          {/* Location Dropdown */}
          <div className="flex w-full flex-col">
            <label htmlFor="location" className="text-gray-600 text-sm font-medium mb-2">Locations</label>
            <div className="relative">
              <select
                id="location"
                className="block w-full py-2 px-3 outline-none bg-white rounded-md shadow-sm focus:outline-none sm:text-sm appearance-none pr-8 text-gray-600"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="" disabled hidden>Select your city</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
                <option value="houston">Houston</option>
              </select>
              {/* Custom arrow for the dropdown */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.95 4.95z"/></svg>
              </div>
            </div>
          </div>

          {/* Date Input */}
          <div className="flex w-full flex-col">
            <label htmlFor="date" className="text-gray-600 font-medium mb-2 text-sm">Date</label>
            <div className="relative">
              <input
                type="date"
                id="date"
                className="block w-full py-2 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-600"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>

          {/* Time Dropdown */}
          <div className="flex w-full flex-col">
            <label htmlFor="time" className="text-gray-600 font-medium mb-2 text-sm">Time</label>
            <div className="relative">
              <select
                id="time"
                className="block w-full py-2 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm appearance-none pr-8 text-gray-600"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="" disabled hidden>Select your time</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">01:00 PM</option>
              </select>
              {/* Custom arrow for the dropdown */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.95 4.95z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
