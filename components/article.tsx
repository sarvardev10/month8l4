import Image from "next/image";
import Actronom from "@/public/nav/actronom.png";
import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 flex justify-center items-start">
      <div className="bg-gray-800 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-start w-full max-w-screen-xl gap-6 md:gap-8 rounded-tl-[20px] opacity-100">
        <div className="relative w-full md:w-[600px] h-[300px] md:h-[460px] overflow-hidden rounded-tl-[20px]">
          <Image
            src={Actronom}
            alt="Astronaut Reading Newspaper"
            layout="fill"
            objectFit="cover"
            className="rounded-tl-[20px] cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full md:w-[600px] flex flex-col justify-center gap-6 md:gap-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Weekly <br /> Digest
          </h2>
          <p className="text-gray-400 mb-4 text-base md:text-lg leading-relaxed">
            Get exclusive promotions & updates <br />
            straight to your inbox.
          </p>
          <div className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 p-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Button className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg flex items-center mt-4 md:mt-0 md:ml-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
              <EmailIcon style={{ fontSize: 20, marginRight: 8 }} />
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
