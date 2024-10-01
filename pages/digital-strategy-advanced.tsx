import React, { useState } from "react";
import Calendly from "@/components/Calendly";

export default function Strategy() {
  const [showCalendly, setShowCalendly] = useState(false);

  const handleBookNow = () => {
    setShowCalendly(true); // Set state to show Calendly component
  };

  return (
    <>
      <div
        className="h-[600px] grid w-full bg-cover relative"
        style={{ backgroundImage: "url('/img/beach.jpg')" }}
      >
        <div className="p-20 px-40 self-center">
          <div className="p-5 mb-2 text-xl bg-zinc-200">Oluwayemisi Adebayo</div>
          <div className="text-white grid grid-cols-2 space-x-10 shadow-2xl">
            <div className="bg-white text-black p-3 rounded">
              <h1 className="text-2xl font-bold">BUSINESS CONSULTATION PACKAGES</h1>
              <h2 className="text-xl">DIGITAL STRATEGY ADVANCED</h2>
              <h1>
                In today’s competitive digital marketplace, a well-defined
                digital marketing strategy is essential for achieving your
                business goals and delivering measurable results.
              </h1>
              <h1>Cost: $400</h1>
              <button onClick={handleBookNow} className="bg-blue-500 text-white p-2 rounded">
                Book Now
              </button>
            </div>
            <div>
              <h1 className="text-3xl font-bold">MAKE YOUR RESERVATION</h1>
              <h2>
                In today’s competitive digital marketplace, a well-defined
                digital marketing strategy is essential for achieving your
                business goals and delivering measurable results.
              </h2>
            </div>
          </div>
        </div>
        {showCalendly && <Calendly urlLink="https://calendly.com/enacwest/digital-strategy-advanced" />}
      </div>

      {/* Render the Calendly component when "Book Now" is clicked */}
      
    </>
  );
}
