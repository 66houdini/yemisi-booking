import { useState } from "react";
import Calendly from "@/components/Calendly";
import Link from "next/link";
export default function Coaching() {
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
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dador6eng/image/upload/v1727245909/yemisi/3_fo0gyy.jpg')",
        }}
      >
        <div className="p-5 md:p-20 self-center">
          <div className="p-5 mb-2 text-sm md:text-xl bg-white text-black flex justify-between">
            <h1>Oluwayemisi Adebayo</h1>
            <h2 className="text-sm italic">
              back to main website:{" "}
              <Link
                className="underline font-semibold"
                href={"https://www.oluwayemisiadebayo.com/"}
              >
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
              <Calendly urlLink="https://calendly.com/oluwayemisiadebayo/healthy-living" />
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
              <h1 className="text-lg md:text-2xl font-bold">
                LIFE COACHING PACKAGES
              </h1>
              <h2 className="md:text-xl">HEALTHY LIVING</h2>
              <h1 className="text-sm md:text-base">
                This session focuses on adopting a balanced lifestyle through
                proper nutrition, regular physical activity, and healthy habits.
                Learn how to make informed choices that enhance your energy
                levels, improve your overall well-being, and create sustainable
                routines for long-term health. 
              </h1>
              <h2 className=" font-bold text-xl">Service; Partnered</h2>
              <h1>Cost: $1200</h1>
              <button
                onClick={handleBookNow}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render the Calendly component when "Book Now" is clicked */}
    </>
  );
}
