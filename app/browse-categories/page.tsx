import Image from "next/image";
import Art from "@/public/nav/art.png";
import Art2 from "@/public/nav/art2.png";
import Art3 from "@/public/nav/art3.png";
import Art4 from "@/public/nav/art4.png";
import Art5 from "@/public/nav/art5.png";
import Art6 from "@/public/nav/art6.png";
import Art7 from "@/public/nav/art7.png";
import Art8 from "@/public/nav/art8.png";

const categories = [
  { title: "Art", image: Art },
  { title: "Collectibles", image: Art2 },
  { title: "Music", image: Art3 },
  { title: "Photography", image: Art4 },
  { title: "Video", image: Art5 },
  { title: "Utility", image: Art6 },
  { title: "Sport", image: Art7 },
  { title: "Virtual Worlds", image: Art8 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Browse Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg flex flex-col items-center transform transition duration-300 hover:scale-105"
            >
              <div
                className="relative mb-4 transform transition duration-300 hover:scale-110"
                style={{
                  width: "240px",
                  height: "240px",
                  gap: "0px",
                  borderRadius: "20px 20px 0px 0px",
                  opacity: "0.9",
                }}
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg cursor-pointer"
                  style={{
                    borderRadius: "20px 20px 0px 0px",
                  }}
                />
              </div>
              <h2 className="text-xl font-bold">{category.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
