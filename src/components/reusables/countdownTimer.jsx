// import React, { useState, useEffect } from 'react';

// function CountdownTimer({ initialTime }) {
//   // Convert initial time (hh:mm) into total seconds
//   const [timeLeft, setTimeLeft] = useState(() => {
//     const [hours, minutes] = initialTime.split(':').map(Number);
//     return hours * 3600 + minutes * 60;
//   });

//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setInterval(() => {
//         setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
//       }, 1000);

//       return () => clearInterval(timer); // Cleanup on unmount
//     }
//   }, [timeLeft]);

//   // Convert total seconds back into hh:mm:ss format
//   const formatTime = (seconds) => {
//     const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
//     const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
//     const secs = String(seconds % 60).padStart(2, '0');
//     return `${hours}:${minutes}:${secs}`;
//   };

//   return (
//     <div>
//       <h2>Countdown Timer</h2>
//       <p>{formatTime(timeLeft)}</p>
//     </div>
//   );
// }

// export default CountdownTimer;
import React, { useState, useEffect } from "react";

function AuctionTimer({ time, handleComplete }) {
    const [timeRemaining, setTimeRemaining] = useState("");

    useEffect(()=>{
      if(timeRemaining=="00:00"){
        handleComplete();
      }
    },[timeRemaining])

    useEffect(() => {
        let remainingTime = time * 1000; // Convert time from seconds to milliseconds

        const interval = setInterval(() => {
            if (remainingTime <= 0) {
                setTimeRemaining("00:00");
                clearInterval(interval);
                return;
            }

            // Convert milliseconds to hours, minutes, and seconds
            const totalHours = Math.floor(remainingTime / (1000 * 60 * 60));
            const days = Math.floor(totalHours / 24);
            const hours = Math.floor(totalHours % 24)
              .toString()
              .padStart(2, '0');
            const minutes = Math.floor(
              (remainingTime % (1000 * 60 * 60)) / (1000 * 60),
            )
              .toString()
              .padStart(2, '0');
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)
              .toString()
              .padStart(2, '0');

            // Update time remaining display
            if (totalHours >= 48) {
              setTimeRemaining(`${days} Days`);
            } else {
              setTimeRemaining(`${minutes}:${seconds}`);
            }

            // Decrement remaining time by one second
            remainingTime -= 1000;
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [time]);

    return (
        <span>
            {timeRemaining}
        </span>
    );
}

export default AuctionTimer;
