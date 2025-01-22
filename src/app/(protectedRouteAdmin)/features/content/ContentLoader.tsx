import React from "react";

export const ContentLoader = () => {
  return (
    <section className="grid md:grid-cols-3 grid-cols-1 gap-5 w-full">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="space-y-2 animate-pulse">
          <div className="bg-gray-300 h-[218px] w-full rounded"></div>
          <div className="flex justify-between items-center">
            <div className="bg-gray-300 h-5 w-3/4 rounded"></div>
            <div className="bg-gray-300 h-6 w-6 rounded-full"></div>
          </div>
        </div>
      ))}
    </section>
  );
};
