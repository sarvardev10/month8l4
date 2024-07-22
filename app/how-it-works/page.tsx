"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Setup from "@/public/nav/setup.png";
import Setup2 from "@/public/nav/setup2.png";
import Setup3 from "@/public/nav/setup3.png";

interface Step {
  title: string;
  description: string;
  image: StaticImageData;
  altText: string;
}

const steps: Step[] = [
  {
    title: "Setup Your Wallet",
    description:
      "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    image: Setup,
    altText: "Setup Your Wallet",
  },
  {
    title: "Create Collection",
    description:
      "Upload your work and set up your collection. Add a description, social links, and floor price.",
    image: Setup2,
    altText: "Create Collection",
  },
  {
    title: "Start Earning",
    description:
      "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    image: Setup3,
    altText: "Start Earning",
  },
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn">
          How It Works
        </h1>
        <Link href="/" legacyBehavior>
          <a className="text-purple-400 mb-8 inline-block hover:underline">
            Find Out How To Get Started
          </a>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:bg-slate-500"
            >
              <div className="relative w-[250px] h-[250px] mx-auto mb-4 overflow-hidden rounded-lg">
                <Image
                  src={step.image}
                  alt={step.altText}
                  layout="fill"
                  objectFit="cover"
                  className="transform transition duration-300 hover:scale-110 cursor-pointer"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{step.title}</h2>
              <p className="text-base md:text-lg">
                {step.description.split('\n').map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
