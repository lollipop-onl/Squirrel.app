import React from "react";
import ReactDOM from "react-dom/client";
import WebFont from "webfontloader";
import "tailwindcss/tailwind.css";
import squirrel from "~/assets/icons/squirrel.svg";

WebFont.load({
  google: {
    families: ["Zen Kaku Gothic Antique"],
  },
});

document.body.classList.add("bg-android-gray", "font-sans", "antialiased");

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <div>
    <div className="absolute inset-0 grid place-items-center">
      <div className="rounded-full border-4 border-white p-5 opacity-10">
        <img className="h-32 w-32 animate-spin-vertical" src={squirrel} />
      </div>
    </div>
  </div>
);
