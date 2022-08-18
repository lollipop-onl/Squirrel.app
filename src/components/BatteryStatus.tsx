import React, { useEffect, useState } from "react";

export const BatteryStatus: React.FC = () => {
  const [battery, setBattery] = useState<any>(null);

  useEffect(() => {
    // @ts-expect-error
    if (typeof navigator.getBattery === "undefined") return;

    // @ts-expect-error
    navigator.getBattery().then((battery: any) => {
      setBattery(battery);
    });
  }, []);

  if (!battery) {
    return null;
  }

  console.log(battery);

  return (
    <div className="text-white">
      <p>charging: {battery.charging ? "yes" : "no"}</p>
      <p>chargingTime: {battery.chargingTime}</p>
      <p>dischargingTime: {battery.dischargingTime}</p>
    </div>
  );
};
