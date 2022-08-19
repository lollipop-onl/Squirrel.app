import React, { useEffect, useState } from "react";

export const DigitalClock: React.FC = () => {
  const [dateTime, setDateTime] = useState<Date>();

  useEffect(() => {
    let invalidated = false;

    const updateTime = () => {
      setDateTime(new Date());

      if (invalidated) return;

      requestAnimationFrame(updateTime);
    };

    updateTime();

    return () => {
      invalidated = true;
    };
  }, []);

  return (
    <div>
      <p className=" text-6xl text-white">
        {Intl.DateTimeFormat("ja", { timeStyle: "medium" }).format(dateTime)}
      </p>
    </div>
  );
};
