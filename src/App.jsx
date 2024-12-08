import "./App.css";
import BabyDog from "./assets/babydog.jpeg";
import dex from './assets/dex.svg'
import { FaTwitter, FaTelegram } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#7dd3fc] to-[#a5b4fc] flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-[#D0A77F] p-4 flex justify-between lg:justify-center items-center sticky top-0 shadow-lg gap-x-10">
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-wide text-[#000000]">
          BabyDog
        </h1>
        <ul className="flex space-x-6 text-black items-center">
          <li>
            <a
              href="https://x.com/MaxOnSolan_?t=_jq6XJT_ZSXof-xPi2Fa3Q&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1DA1F2]"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/BabyDogOnSol"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0088cc]"
            >
              <FaTelegram className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6B7280]"
            >
              <img
                src={dex}
                className="w-6 h-6 bg-black rounded-full border-7 border-[#fff]"
                alt=""
              />
            </a>
          </li>
        </ul>
      </nav>


      {/* Hero Section */}
      <header className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-80px)] p-6 lg:p-16 space-y-6 lg:space-y-0 lg:space-x-10">
        {/* Text Content */}
        <div className="max-w-md text-center lg:text-left">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#000000]">
            BabyDog <span className="text-[#D0A77F]">$MAX</span>
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
              href="https://dexscreener.com"
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
      <section className="bg-white p-10 lg:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div id="about" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#334155]">
              About
            </h2>
            <p className="text-lg lg:text-xl text-[#475569]">
              Learn more about Baby Dog's journey as the cutest memecoin on
              Solana.
            </p>
          </div>
          <div id="tokenomics" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#334155]">
              Tokenomics
            </h2>
            <p className="text-lg lg:text-xl text-[#475569]">
              Discover the economics behind BabyDog ($MAX) and how we bring
              value to our holders.
            </p>
          </div>
          <div id="roadmap" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#334155]">
              Contract Address
            </h2>
            <p className="text-lg lg:text-xl text-[#475569]">
              Grab a bag of $MAX and keep Baby Dog smiling. We moon together.
            </p>
          </div>
          <div id="contact" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#334155]">
              Contact
            </h2>
            <p className="text-lg lg:text-xl text-[#475569]">
              Join our community or reach out for collaborations!
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
