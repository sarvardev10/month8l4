import Image from "next/image";
import SpaceWalking from "@/public/nav/space_walking.png";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Avatar from "@/public/nav/Avatar Placeholder.png";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white pt-16">
      <nav className="px-6 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-1/2 md:ml-12">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Discover <br /> Digital Art & <br /> Collect NFTs
            </h1>
            <p className="mt-4 text-base md:text-lg">
              NFT Marketplace UI Created With Anima For <br /> Figma. Collect,
              Buy And Sell Art From More <br /> Than 20k NFT Artists.
            </p>
            <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded flex items-center">
              <RocketLaunchIcon style={{ fontSize: 20, marginRight: 8 }} />
              Get Started
            </button>
            <div className="mt-8 flex flex-wrap gap-8">
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold">240k+</h2>
                <p>Total Sale</p>
              </div>
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold">100k+</h2>
                <p>Auctions</p>
              </div>
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold">240k+</h2>
                <p>Artists</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-10 md:mt-4 md:mr-12">
            <Image
              src={SpaceWalking}
              alt="Space Walking"
              layout="responsive"
              className="rounded-t-lg"
            />
            <div className="mt-4 bg-zinc-800 p-4 rounded-lg flex items-center space-x-4">
              <Image
                src={Avatar}
                alt="Avatar"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h1 className="text-lg md:text-xl font-bold">Space Walking</h1>
                <h2 className="text-sm md:text-xl">Animakid</h2>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
