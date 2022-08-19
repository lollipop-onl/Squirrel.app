import React, { useEffect, useState } from "react";
import dayjs from 'dayjs';

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
      <p className="py-4 flex text-7xl font-mono text-white items-end justify-center">
        {dayjs(dateTime).format('HH:mm:ss')}
        <span className="text-5xl">{dayjs(dateTime).format('.SSS')}</span>
      </p>
    </div>
  );
};
