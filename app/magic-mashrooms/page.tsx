"use client";

import Image from "next/image";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Button } from "@mui/material";
import Mashroom from "@/public/nav/qoziqorin.png";
import { useState, useEffect } from "react";

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

const Index = () => {
  const [timeLeft, setTimeLeft] = useState<Time>({
    hours: 59,
    minutes: 30,
    seconds: 45,
  });

  useEffect(() => {
    const calculateTotalSeconds = (time: Time): number => {
      return time.hours * 3600 + time.minutes * 60 + time.seconds;
    };

    const totalSeconds = calculateTotalSeconds(timeLeft);

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => {
        const totalSecondsLeft = calculateTotalSeconds(prevTime) - 1;

        if (totalSecondsLeft <= 0) {
          clearInterval(intervalId);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          hours: Math.floor(totalSecondsLeft / 3600),
          minutes: Math.floor((totalSecondsLeft % 3600) / 60),
          seconds: totalSecondsLeft % 60,
        };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="relative w-full h-[640px] mb-4">
          <div
            className="absolute inset-0 bg-gradient-to-b from-[rgba(162,89,255,0)] to-[#A259FF] rounded-lg"
            style={{ zIndex: 1 }}
          ></div>

          <div className="relative w-full h-full">
            <Image
              src={Mashroom}
              alt="Magic Mashrooms"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute top-96 left-96 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
              <h1 className="text-4xl font-bold mb-4">Magic Mashrooms</h1>
              <Button
                variant="contained"
                className="flex items-center bg-purple-700 text-white font-bold py-2 px-4 rounded hover:bg-purple-800"
              >
                <RemoveRedEyeIcon className="mr-2" />
                See NFT
              </Button>
            </div>
          </div>

          <div
            className="absolute bottom-16 right-24 bg-black bg-opacity-50 px-3 py-1 rounded-lg"
            style={{ zIndex: 2, width: 236, height: 101 }}
          >
            <div className="flex flex-col items-center absolute top-5 left-10">
              <span className="text-xs">Auction ends in:</span>

              <div className="flex">
                <div className="flex flex-col items-center mx-1">
                  <span className="text-lg font-bold">{timeLeft.hours}</span>
                  <span className="text-xs">Hours</span>
                </div>
                <div className="flex flex-col items-center mx-1">
                  <span className="text-lg font-bold">{timeLeft.minutes}</span>
                  <span className="text-xs">Minutes</span>
                </div>
                <div className="flex flex-col items-center mx-1">
                  <span className="text-lg font-bold">{timeLeft.seconds}</span>
                  <span className="text-xs">Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
