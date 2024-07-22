import Image from "next/image";
import Dsgn_animals from "@/public/nav/dsgn_animals.png";
import Magic_mashrooms from "@/public/nav/magic_mashrooms.png";
import Disco_machines from "@/public/nav/disco_machines.png";

const Index = () => {
  const collections = [
    {
      title: "DSGN Animals",
      creator: "MrFox",
      mainImage: Dsgn_animals,
      subImages: [],
    },
    {
      title: "Magic Mushrooms",
      creator: "Shroomie",
      mainImage: Magic_mashrooms,
      subImages: [],
    },
    {
      title: "Disco Machines",
      creator: "BeKind2Robots",
      mainImage: Disco_machines,
      subImages: [],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="px-8 py-12">
        <h1 className="text-4xl font-bold mb-10 ml-6">Trending Collection</h1>
        <p className="text-lg mb-8 ml-6">
          Checkout Our Weekly Updated Trending Collection.
        </p>
        <div className="flex flex-wrap justify-between">
          {collections.map((collection, index) => (
            <div key={index} className="w-full lg:w-1/3 p-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <Image
                  src={collection.mainImage}
                  alt={collection.title}
                  width={400}
                  height={400}
                  className="rounded-lg transform transition duration-300 hover:scale-105"
                />
                <h2 className="text-2xl font-bold mt-4">{collection.title}</h2>
                <p className="text-gray-400">{collection.creator}</p>
                <div className="mt-4 flex space-x-4">
                  {collection.subImages.map((subImage, subIndex) => (
                    <Image
                      key={subIndex}
                      src={subImage}
                      alt={`${collection.title} ${subIndex}`}
                      width={100}
                      height={100}
                      className="rounded-lg transform transition duration-300 hover:scale-105 "
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
