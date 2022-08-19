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
      <p className="py-4 text-7xl font-mono text-white text-center">
        {dayjs(dateTime).format('HH:mm:ss.SSS')}
      </p>
    </div>
  );
};
