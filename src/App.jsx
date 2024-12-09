import "./App.css";
import BabyDog from "./assets/babydog.jpeg";
import NewDog from "./assets/IMG_20241208_221044_267.jpg"; // Replace with the correct file name of the new image
import dex from "./assets/dex.svg";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import { SiSolana } from "react-icons/si";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#7dd3fc] to-[#a5b4fc] flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-[#D0A77F] p-4 flex justify-between lg:justify-center items-center sticky top-0 shadow-lg gap-x-10 z-50">
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-wide text-[#000000] hover:scale-105 transform transition-transform">
          BabyDog
        </h1>
        <ul className="flex space-x-6 text-black items-center">
          <li>
            <a
              href="https://x.com/MaxOnSolan_?t=_jq6XJT_ZSXof-xPi2Fa3Q&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1DA1F2] transition-transform transform hover:scale-125"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/BabyDogOnSol"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0088cc] transition-transform transform hover:scale-125"
            >
              <FaTelegram className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://dexscreener.com/solana/AUTJVKHTwS2Jj6wG3C1gM5tytMbza6GQWkQ4CW8CY2H"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6B7280] transition-transform transform hover:scale-125"
            >
              <img
                src={dex}
                className="w-6 h-6 bg-black rounded-full border-2 border-[#fff]"
                alt=""
              />
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
<header className="relative flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-80px)] p-6 lg:p-16 space-y-6 lg:space-y-0 lg:space-x-10 overflow-hidden">
  {/* Floating Solana Icons */}
  <div className="absolute top-10 left-5 lg:top-20 lg:left-20 animate-float">
    <SiSolana className="text-[#6366f1] text-6xl lg:text-8xl opacity-50" />
  </div>
  <div className="absolute bottom-10 right-5 lg:bottom-20 lg:right-20 animate-float">
    <SiSolana className="text-[#10b981] text-6xl lg:text-8xl opacity-50" />
  </div>

  {/* Text Content */}
  <div className="max-w-md text-center lg:text-left z-10">
    <h2 className="text-5xl lg:text-6xl font-bold text-[#000000]">
      BabyDog <br /> <span className="text-[#D0A77F]">$MAX</span>
    </h2>
    <p className="mt-4 text-lg lg:text-xl font-medium text-[#475569]">
      The cute little Baby Dog of Solana is staring at you, adore him! 🐾✨
    </p>
    <div className="flex justify-center lg:justify-start space-x-6 mt-6">
      <a
        href="https://x.com/MaxOnSolan_?t=_jq6XJT_ZSXof-xPi2Fa3Q&s=09"
        className="bg-[#000000] text-white p-3 rounded-full shadow-lg hover:bg-[#000000]"
      >
        <FaTwitter className="w-6 h-6" />
      </a>
      <a
        href="https://t.me/BabyDogOnSol"
        className="bg-[#000000] text-white p-3 rounded-full shadow-lg hover:bg-[#000000]"
      >
        <FaTelegram className="w-6 h-6" />
      </a>
      <a
        href="https://dexscreener.com/solana/AUTJVKHTwS2Jj6wG3C1gM5tytMbza6GQWkQ4CW8CY2H"
        className="bg-[#000000] text-white p-3 rounded-full shadow-lg hover:bg-[#000000]"
      >
        <img src={dex} className="w-6 h-6 bg-black rounded-full border-7 border-[#fff]" alt="" />
      </a>
    </div>
  </div>

  {/* Dog Image */}
  <div>
    <img
      src={BabyDog}
      alt="Baby Dog"
      className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-full border-8 border-[#D0A77F] shadow-xl"
    />
  </div>
</header>
      {/* About, Tokenomics, Roadmap, Contact */}
      <section className="bg-white py-10 lg:py-20 px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About Card */}
          <div className="bg-[#f9fafb] shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold mb-4 text-[#334155]">About</h2>
            <p className="text-lg text-[#475569]">
              The cute little dog on Solana is staring at you, adore him🐶
            </p>
          </div>

          {/* Tokenomics Card */}
          <div className="bg-[#f9fafb] shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold mb-4 text-[#334155]">
              Tokenomics
            </h2>
            <p className="text-lg text-[#475569]">
              Discover the economics behind BabyDog ($MAX) and how we bring
              value to our holders.
            </p>
          </div>

          {/* Contract Address Card */}
          <div className="bg-[#f9fafb] shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold mb-4 text-[#334155]">
              Contract Address
            </h2>
            <p className="text-lg text-[#475569]">
              <span className="font-bold">Address:</span> <br />
              <span id="contract-address" className="text-[#1d4ed8]">
                AUTJVKHTwS2Jj6wG3C1gM5tytMbza6GQWkQ4CW8CY2H
              </span>
            </p>
          </div>
        </div>
      </section>
{/* Our Dogs Section */}
{/* Our Dog Section */}
<section className="bg-[#f3f4f6] py-10 lg:py-20 px-6 lg:px-16">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl lg:text-5xl font-bold text-[#334155] mb-6">
      Meet BabyDog
    </h2>
    <p className="text-lg lg:text-xl text-[#475569] mb-12">
      The cutest dog in the Solana ecosystem! 🐾
    </p>
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow max-w-md mx-auto">
      <img
        src={NewDog}
        alt="Baby Dog"
        className="w-72 h-72 lg:w-80 lg:h-80 object-cover mx-auto rounded-full border-8 border-[#D0A77F] shadow-md"
      />
      <h3 className="text-2xl font-semibold mt-4 text-[#334155]">
        BabyDog
      </h3>
      <p className="text-[#475569] mt-2">
        BabyDog is the heart and soul of Solana’s meme culture. Adorable, loyal, 
        and ready to brighten your day with a wag of its tail! 🐶✨
      </p>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-[#D0A77F] p-6 text-center">
        <div className="flex items-center justify-center space-x-2 text-black font-semibold">
          <SiSolana className="w-6 h-6" />
          <p>© 2024 Baby Dog (MAX). Made with ❤️ for the Solana ecosystem.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
