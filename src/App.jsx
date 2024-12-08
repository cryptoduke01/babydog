import "./App.css";
import BabyDog from "./assets/babydog.jpeg";
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
              href="https://dexscreener.com"
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
      <header className="relative flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-80px)] p-6 lg:p-16 space-y-6 lg:space-y-0 lg:space-x-10 overflow-hidden">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-gradient-to-tr from-[#7dd3fc]/50 via-[#d0a77f]/30 to-[#a5b4fc]/40 z-0 pointer-events-none"></div>
  <div className="absolute -top-10 -left-20 w-48 h-48 bg-[#d0a77f]/20 rounded-full filter blur-3xl z-0"></div>
  <div className="absolute -bottom-20 -right-16 w-64 h-64 bg-[#7dd3fc]/30 rounded-full filter blur-2xl z-0"></div>

  {/* Crypto Icons */}
  <div className="absolute top-1/4 left-10 text-[#475569]/20 z-0 animate-float">
    <SiSolana className="w-20 h-20" />
  </div>
  <div className="absolute bottom-1/4 right-10 text-[#475569]/20 z-0 animate-bounce">
    <img
      src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=024"
      alt="Ethereum"
      className="w-16 h-16 opacity-80"
    />
  </div>
  <div className="absolute top-1/3 right-1/3 text-[#475569]/10 z-0 animate-pulse">
    <img
      src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=024"
      alt="Bitcoin"
      className="w-24 h-24"
    />
  </div>

  {/* Text Content */}
  <div className="relative z-10 max-w-md text-center lg:text-left">
    <h2 className="text-5xl lg:text-6xl font-bold text-[#000000]">
      BabyDog <br /> <span className="text-[#D0A77F]">$MAX</span>
    </h2>
    <p className="mt-4 text-lg lg:text-xl font-medium text-[#475569]">
      The cute little Baby Dog of Solana is staring at you, adore him! 🐾✨
    </p>
    <div className="flex justify-center lg:justify-start space-x-6 mt-6">
      <a
        href="https://x.com/MaxOnSolan_?t=_jq6XJT_ZSXof-xPi2Fa3Q&s=09"
        className="bg-[#000000] text-white p-3 rounded-full shadow-lg hover:bg-[#1DA1F2] transition-transform transform hover:scale-110"
      >
        <FaTwitter className="w-6 h-6" />
      </a>
      <a
        href="https://t.me/BabyDogOnSol"
        className="bg-[#000000] text-white p-3 rounded-full shadow-lg hover:bg-[#0088cc] transition-transform transform hover:scale-110"
      >
        <FaTelegram className="w-6 h-6" />
      </a>
      <a
        href="https://dexscreener.com"
        className="bg-[#000000] text-white p-3 rounded-full shadow-lg hover:bg-[#6B7280] transition-transform transform hover:scale-110"
      >
        <img src={dex} className="w-6 h-6 rounded-full" alt="" />
      </a>
    </div>
  </div>

  {/* Dog Image */}
  <div className="relative z-10">
    <img
      src={BabyDog}
      alt="Baby Dog"
      className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-full border-8 border-[#D0A77F] shadow-xl hover:scale-105 transform transition-transform"
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
              Learn more about Baby Dog's journey as the cutest memecoin on
              Solana.
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
                (Add contract address here later)
              </span>
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
