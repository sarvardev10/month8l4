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

const Index: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<Time>({
    hours: 59,
    minutes: 30,
    seconds: 45,
  });

  useEffect(() => {
    const calculateTotalSeconds = (time: Time): number => {
      return time.hours * 3600 + time.minutes * 60 + time.seconds;
    };

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
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="relative w-full h-[500px] md:h-[640px] mb-4">
          <div
            className="absolute inset-0 bg-gradient-to-b from-[rgba(162,89,255,0)] to-[#A259FF] rounded-lg"
            style={{ zIndex: 1 }}
          ></div>

          <div className="relative w-full h-full">
            <Image
              src={Mashroom}
              alt="Magic Mushrooms"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-500 transform hover:scale-105"
            />
            <div className="absolute inset-x-4 top-1/2 transform -translate-y-1/2 md:inset-x-16 lg:inset-x-32 flex flex-col md:flex-row justify-between z-10">
              <div className="flex flex-col items-start mb-8 md:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate__animated animate__fadeIn">
                  Magic Mushrooms
                </h1>
                <Button
                  variant="contained"
                  className="flex items-center bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-100 transition-transform duration-300"
                >
                  <RemoveRedEyeIcon className="mr-2" />
                  See NFT
                </Button>
              </div>

              <div className="flex flex-col items-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                <span className="text-xs">Auction ends in:</span>
                <div className="flex mt-4 md:mt-6">
                  <div className="flex flex-col items-center mx-2">
                    <span className="text-lg font-bold">{timeLeft.hours}</span>
                    <span className="text-xs">Hours</span>
                  </div>
                  <div className="flex flex-col items-center mx-2">
                    <span className="text-lg font-bold">{timeLeft.minutes}</span>
                    <span className="text-xs">Minutes</span>
                  </div>
                  <div className="flex flex-col items-center mx-2">
                    <span className="text-lg font-bold">{timeLeft.seconds}</span>
                    <span className="text-xs">Seconds</span>
                  </div>
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
