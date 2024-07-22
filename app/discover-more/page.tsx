"use client";

import Image, { StaticImageData } from "next/image";
import Discower from "@/public/nav/discover.png";
import Discower2 from "@/public/nav/discover2.png";
import Discower3 from "@/public/nav/discover3.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Button } from "@mui/material";

interface NFT {
  title: string;
  creator: string;
  price: string;
  highestBid: string;
  image: StaticImageData;
}

const nfts: NFT[] = [
  {
    title: "Distant Galaxy",
    creator: "MoonDancer",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
    image: Discower,
  },
  {
    title: "Life On Edena",
    creator: "NebulaKid",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
    image: Discower2,
  },
  {
    title: "AstroFiction",
    creator: "Spaceone",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
    image: Discower3,
  },
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-6 mt-5">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold animate__animated animate__fadeIn">
              Discover More NFTs
            </h1>
            <p className="text-lg md:text-xl animate__animated animate__fadeIn animate__delay-1s">
              Explore New Trending NFTs
            </p>
          </div>
          <Button
            variant="outlined"
            className="flex items-center bg-transparent border border-purple-700 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
          >
            <RemoveRedEyeIcon className="mr-3" />
            See All
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {nfts.map((nft, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg flex flex-col items-center transform transition duration-300 hover:scale-105 hover:bg-slate-600"
            >
              <div className="relative w-full h-64 md:h-72 mb-4 transform transition duration-300 hover:scale-110">
                <Image
                  src={nft.image}
                  alt={nft.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl cursor-pointer"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">{nft.title}</h2>
              <p className="text-gray-400 mb-4">{nft.creator}</p>
              <div className="flex flex-col md:flex-row justify-between w-full">
                <div className="text-left mb-4 md:mb-0">
                  <p className="text-gray-400 text-sm">Price</p>
                  <p className="text-lg font-semibold">{nft.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Highest Bid</p>
                  <p className="text-lg font-semibold">{nft.highestBid}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
