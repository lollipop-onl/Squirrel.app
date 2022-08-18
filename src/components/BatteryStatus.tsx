import React, { useEffect, useState } from "react";

export const BatteryStatus: React.FC = () => {
  const [battery, setBattery] = useState<any>(null);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    // @ts-expect-error
    if (typeof navigator.getBattery === "undefined") return;

    // @ts-expect-error
    navigator.getBattery().then((battery: any) => {
      setBattery(battery);
      setLevel(battery.level);

      battery.addEventListener("levelchange", () => {
        setLevel(battery.level);
      });
    });
  }, []);

  if (!battery) {
    return null;
  }

  return (
    <div className="text-white">
      <p>charging: {battery.charging ? "yes" : "no"}</p>
      <p>chargingTime: {battery.chargingTime}</p>
      <p>dischargingTime: {battery.dischargingTime}</p>
      <p>level: {level}</p>
    </div>
  );
};
