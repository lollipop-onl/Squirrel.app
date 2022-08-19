import React from "react";
import ReactDOM from "react-dom/client";
import WebFont from "webfontloader";
import "tailwindcss/tailwind.css";
import squirrel from "~/assets/icons/squirrel.svg";
import { BatteryStatus } from "~/components/BatteryStatus";
import { DigitalClock } from "~/components/DigitalClock";
import { ButtonReload } from "~/components/ButtonReload";

WebFont.load({
  google: {
    families: ["Zen Kaku Gothic Antique"],
  },
});

document.body.classList.add("bg-android-gray", "font-sans", "antialiased");

const root = ReactDOM.createRoot(document.getElementById("root")!);

document.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
  },
  { passive: false }
);

root.render(
  <div>
    <div className="absolute inset-0 grid place-items-center">
      <img className="h-40 w-40 opacity-10" src={squirrel} />
    </div>
    <div className="relative">
      <BatteryStatus />
      <DigitalClock />
      <ButtonReload>
        <span className="text-white">page reload.</span>
      </ButtonReload>
    </div>
  </div>
);
