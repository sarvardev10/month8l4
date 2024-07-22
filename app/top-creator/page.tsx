import Image from "next/image";
import Artict_avatar from "@/public/nav/artict_avatar.png";
import Artict_avatar2 from "@/public/nav/artict_avatar2.png";
import Artict_avatar3 from "@/public/nav/artict_avatar3.png";
import Artict_avatar4 from "@/public/nav/artict_avatar4.png";
import Artict_avatar5 from "@/public/nav/artict_avatar5.png";
import Artict_avatar6 from "@/public/nav/artict_avatar6.png";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Button } from "@mui/material";

const Index = () => {
  const creators = [
    {
      name: "Keepitreal",
      totalSales: "34.53 ETH",
      image: Artict_avatar,
    },
    {
      name: "DigiLab",
      totalSales: "34.53 ETH",
      image: Artict_avatar2,
    },
    {
      name: "GravityOne",
      totalSales: "34.53 ETH",
      image: Artict_avatar3,
    },
    {
      name: "Juanie",
      totalSales: "34.53 ETH",
      image: Artict_avatar4,
    },
    {
      name: "BlueWhale",
      totalSales: "34.53 ETH",
      image: Artict_avatar5,
    },
    {
      name: "Mr Fox",
      totalSales: "34.53 ETH",
      image: Artict_avatar6,
    },
    {
      name: "Shroomie",
      totalSales: "34.53 ETH",
      image: Artict_avatar,
    },
    {
      name: "Robotica",
      totalSales: "34.53 ETH",
      image: Artict_avatar2,
    },
    {
      name: "RustyRobot",
      totalSales: "34.53 ETH",
      image: Artict_avatar3,
    },
    {
      name: "Animakid",
      totalSales: "34.53 ETH",
      image: Artict_avatar4,
    },
    {
      name: "Dotgu",
      totalSales: "34.53 ETH",
      image: Artict_avatar5,
    },
    {
      name: "Ghiblier",
      totalSales: "34.53 ETH",
      image: Artict_avatar6,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white ">
      <main className="px-8 py-12 ">
        <div className="flex justify-between items-center mb-8 ">
          <div>
            <h1 className="text-4xl font-bold ">Top Creators</h1>
            <p className="text-lg">
              Checkout Top Rated Creators On The NFT Marketplace
            </p>
          </div>
          <Button
            variant="outlined"
            className="bg-gray-900 hover:bg-purple-700 border border-purple-700 text-white font-bold py-3 px-6 rounded-[18px]"
          >
            <RocketLaunchIcon style={{ fontSize: 20, marginRight: 8 }} />
            View Rankings
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg flex flex-col items-center transform transition duration-300 hover:scale-105 hover:bg-slate-600"
            >
              <div className="relative w-24 h-24 mb-4 ">
                <Image
                  src={creator.image}
                  alt={creator.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full transform transition duration-300 hover:scale-110 cursor-pointer"
                />
              </div>
              <h2 className="text-xl font-bold">{creator.name}</h2>
              <p className="text-gray-400">Total Sales: {creator.totalSales}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
