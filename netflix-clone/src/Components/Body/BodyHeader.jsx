export default function BodyHeader() {
  return (
    <>
      <div
        className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden"
        style={{ height: "25rem" }}
      >
        <div className="absolute inset-0">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web_tall_panel/ET-en-20250331-TRIFECTA-perspective_238247fc-c2ee-424b-99b5-e192d5311a29_small.jpg"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Starts at USD 2.99. Cancel anytime.
          </p>
          <a
            href="#"
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}
