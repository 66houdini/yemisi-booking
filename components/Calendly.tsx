import { useEffect } from "react";

export default function Calendly({urlLink}: {urlLink: string}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget min-w-80 h-[700px] absolute "
      data-url={urlLink}
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
}
