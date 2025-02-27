import { useState, useEffect } from "react";

const DateCounter = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      let year = now.getFullYear();
      const summerStart = new Date(year, 5, 1); // June 1st (Months are 0-indexed)

      if (now > summerStart) {
        // If summer has already passed, set next year's countdown
        summerStart.setFullYear(year + 1);
      }

      const diffTime = summerStart - now;

      setTimeLeft({
        days: Math.floor(diffTime / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diffTime / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diffTime / (1000 * 60)) % 60),
        seconds: Math.floor((diffTime / 1000) % 60),
      });
    };

    updateCountdown(); // Run immediately
    const interval = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <p className="text-4xl">
      COUNTDOWN UNTIL SUMMER BEGGINS:
      <strong>
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
        {timeLeft.seconds}s
      </strong>
    </p>
  );
};

export default DateCounter;
