import React from "react";
import ReactDOM from "react-dom/client";
import WebFont from "webfontloader";
import "tailwindcss/tailwind.css";

WebFont.load({
  google: {
    families: ["Zen Kaku Gothic Antique"],
  },
});

document.body.classList.add("bg-android-gray", "font-sans", "antialiased");

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <div className="p-4">
    <p className="text-white">Hello world</p>
  </div>
);
