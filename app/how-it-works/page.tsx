import Link from "next/link";
import Image from "next/image";
import Setup from "@/public/nav/setup.png";
import Setup2 from "@/public/nav/setup2.png";
import Setup3 from "@/public/nav/setup3.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <Link href="/" legacyBehavior>
          <a className="text-purple-400 mb-8 inline-block hover:underline">
            Find Out How To Get Started
          </a>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:bg-slate-500">
            <div className="relative w-[250px] h-[250px] mx-auto mb-4 overflow-hidden rounded-lg">
              <Image
                src={Setup}
                alt="Setup Your Wallet"
                layout="fill"
                objectFit="cover"
                className="transform transition duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">Setup Your Wallet</h2>
            <p>
              Set up your wallet of choice. <br /> Connect it to the Animarket
              by <br /> clicking the wallet icon in the top <br /> right corner.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:bg-slate-500">
            <div className="relative w-[250px] h-[250px] mx-auto mb-4 overflow-hidden rounded-lg">
              <Image
                src={Setup2}
                alt="Create Collection"
                layout="fill"
                objectFit="cover"
                className="transform transition duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">Create Collection</h2>
            <p>
              Upload your work and set up your <br /> collection. Add a
              description, <br /> social links, and floor price.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:bg-slate-500">
            <div className="relative w-[250px] h-[250px] mx-auto mb-4 overflow-hidden rounded-lg">
              <Image
                src={Setup3}
                alt="Start Earning"
                layout="fill"
                objectFit="cover"
                className="transform transition duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">Start Earning</h2>
            <p>
              Choose between auctions and <br />
              fixed-price listings. Start earning <br />
              by selling your NFTs or trading <br />
              others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
