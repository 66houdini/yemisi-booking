// import { useEffect } from "react";

// export default function Calendly({urlLink}: {urlLink: string}) {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     document.body.appendChild(script);

//     // Cleanup function to remove the script when the component is unmounted
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div
//       className="calendly-inline-widget min-w-80 h-[700px] absolute "
//       data-url={urlLink}
//       style={{ minWidth: "320px", height: "700px" }}
//     ></div>
//   );
// }


import { useEffect } from "react";

export default function Calendly({ urlLink }: { urlLink: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget md:min-w-80 md:h-[700px] fixed top-0 left-0 w-full h-full z-50 bg-white"
      data-url={urlLink}
      style={{
        minWidth: "320px",
        height: "100vh",  // Ensure full height of the viewport
        zIndex: 1000,  // Ensure it's on top of other elements
      }}
    ></div>
  );
}
