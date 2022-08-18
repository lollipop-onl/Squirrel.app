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
      <img className="h-40 w-40 opacity-10" src={squirrel} />
    </div>
  </div>
);
