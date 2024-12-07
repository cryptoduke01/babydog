import "./App.css";
import BabyDog from "./assets/babydog.jpeg";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#7dd3fc] to-[#a5b4fc] flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-[#D0A77F] p-4 flex justify-between items-center sticky top-0 shadow-lg">
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-wide text-[#334155]">
          $BabyDog
        </h1>
        <ul className="flex space-x-6 text-black">
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1DA1F2]"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://telegram.org"
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
              <BiLinkExternal className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col lg:flex-row items-center justify-between p-10 lg:p-20 space-y-10 lg:space-y-0">
        {/* Text Content */}
        <div className="max-w-md text-center lg:text-left">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#334155]">
            $BabyDog <span className="text-[#D0A77F]">MAX</span>
          </h2>
          <p className="mt-6 text-lg lg:text-xl font-medium text-[#475569]">
            The cute little dog of Solana is staring at you, adore him! 🐾✨
          </p>
          <div className="flex justify-center lg:justify-start space-x-6 mt-8">
            <a
              href="https://twitter.com"
              className="bg-[#1DA1F2] text-white p-3 rounded-full shadow-lg hover:bg-[#1A91DA]"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://telegram.org"
              className="bg-[#0088cc] text-white p-3 rounded-full shadow-lg hover:bg-[#0077B5]"
            >
              <FaTelegram className="w-6 h-6" />
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
              Discover the economics behind $BabyDog (MAX) and how we bring
              value to our holders.
            </p>
          </div>
          <div id="roadmap" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#334155]">
              Roadmap
            </h2>
            <p className="text-lg lg:text-xl text-[#475569]">
              Explore our exciting milestones and plans for the future of
              $BabyDog.
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
