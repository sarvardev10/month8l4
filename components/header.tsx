import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

const Index = () => {
  const links = [
    { path: "/", title: "Marketplace" },
    { path: "/trending-collection", title: "Rankings" },
    { path: "/top-creator", title: "Connect a Wallet" },
  ];

  return (
    <header className="sticky top-0 py-4 bg-gray-900 flex flex-col md:flex-row justify-between items-center px-4 md:px-8 z-50 shadow-md transition-all duration-300 ease-in-out">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <Image src={Logo} alt="Logo" width={32} height={32} className="rounded-full" />
        <h1 className="text-xl font-bold text-white">NFT Marketplace</h1>
      </div>
      <nav className="flex flex-col md:flex-row gap-4 md:gap-7 items-center">
        {links.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className={`text-white font-medium hover:text-purple-400 transition-transform duration-300 ease-in-out transform hover:scale-105 ${
              item.path === "/sign-up" ? "hidden" : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
        <Link
          href="/sign-up"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <AssignmentIndIcon />
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Index;
