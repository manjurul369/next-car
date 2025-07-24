"use client";
import React from 'react';

export default function Loading() {
  return (
    <div className="fixed w-screen h-screen bg-white flex items-center justify-center z-50">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-t-blue-200 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '0.75s'}}></div>
        </div>
        
        {/* Text */}
        <h2 className="text-3xl font-bold text-white mb-4">MORENT</h2>
        <div className="flex items-center justify-center space-x-1 text-white/80">
          <span>Loading</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}