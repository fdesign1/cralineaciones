import { useEffect } from "react";

export function Insta() {
  useEffect(() => {
    // Si el script no existe aún, lo agregamos
    if (!document.querySelector("#elfsight-script")) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      script.id = "elfsight-script";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="elfsight-app-e64d9b84-7a8d-4ef1-878b-673768e86871"
      data-elfsight-app-lazy
    ></div>
  );
}
