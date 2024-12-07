import "./App.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 flex flex-col items-center justify-center text-white p-5">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-6xl font-bold mb-4">Baby Dog (MAX)</h1>
        <p className="text-2xl mb-6">
          The cute little dog of Solana is staring at you, adore him
        </p>
      </header>

      {/* Image Section */}
      <div className="mb-8">
        {/* Placeholder for a cute dog image, you can replace it with any meme image */}
        <img
          src="https://via.placeholder.com/300?text=Baby+Dog"
          alt="Baby Dog"
          className="w-64 h-64 object-cover rounded-full border-4 border-white"
        />
      </div>

      {/* Socials Section */}
      <div className="flex space-x-4 mb-12">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          Twitter
        </a>
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          Telegram
        </a>
      </div>

      {/* Footer Section */}
      <footer className="mt-auto text-center py-4 text-sm">
        <p>© 2024 Baby Dog (MAX). All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
