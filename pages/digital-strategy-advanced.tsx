import React, { useState } from "react";
import Calendly from "@/components/Calendly";
import Link from "next/link";

export default function Strategy() {
  const [showCalendly, setShowCalendly] = useState(false);

  const handleBookNow = () => {
    setShowCalendly(true); // Set state to show Calendly component
  };

  const handleCloseCalendly = () => {
    setShowCalendly(false); // Close Calendly on user action
  };

  return (
    <>
    <div
        className="grid w-full bg-cover relative"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dador6eng/image/upload/v1727245909/yemisi/3_fo0gyy.jpg')" }}
      >
        
        <div className="p-5 md:p-20 self-center">
          <div className="p-5 mb-2 text-sm md:text-xl bg-white text-black flex justify-between">
            <h1>Oluwayemisi Adebayo</h1>
            <h2 className="text-sm italic">
              back to main website:{" "}
              <Link className="underline font-semibold" href={"https://www.oluwayemisiadebayo.com/"}>
                Yemisi
              </Link>
            </h2>
          </div>
          {showCalendly && (
          <>
            {/* Overlay background */}
            <div
              className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
              onClick={handleCloseCalendly} // Allow closing by clicking the overlay
            ></div>
            {/* Calendly Component */}
            <Calendly urlLink="https://calendly.com/oluwayemisiadebayo/digital-strategy-advanced" />
          </>
        )}
          <div className="text-white grid md:grid-cols-2 space-x-3 md:space-x-10 shadow-2xl">
            <div>
              <img
                src="https://res.cloudinary.com/dador6eng/image/upload/v1727245918/yemisi/2_yf9z5n.jpg"
                className="rounded"
              />
            </div>
            <div className="bg-white text-black p-3 rounded h-fit md:space-y-2">
              <h1 className="text-lg md:text-2xl font-bold">BUSINESS CONSULTATION PACKAGES</h1>
              <h2 className="md:text-xl">DIGITAL STRATEGY ADVANCED</h2>
              <h1 className="text-sm md:text-base">
                In today’s competitive digital marketplace, a well-defined digital marketing
                strategy is essential for achieving your business goals and delivering measurable
                results.
              </h1>
              <h1>Cost: $400</h1>
              <button onClick={handleBookNow} className="bg-blue-500 text-white p-2 rounded">
                Book Now
              </button>
            </div>
          </div>
        </div>
       
      </div>




      {/* <div
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
      </div> */}

      {/* Render the Calendly component when "Book Now" is clicked */}
      
    </>
  );
}
