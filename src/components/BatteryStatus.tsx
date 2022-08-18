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

  return (
    <div>
      <p>charging: {battery.charging}</p>
      <p>chargingTime: {battery.chargingTime}</p>
      <p>dischargingTime: {battery.dischargingTime}</p>
    </div>
  );
};
