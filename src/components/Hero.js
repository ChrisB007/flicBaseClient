export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-black">
      <main className="lg:relative">
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline text-white">Point-Based</span>{" "}
              <span className="hero-text block text-red-600 xl:inline">
                Interactive database for film & TV
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
              Choose a movie | Boost to Compete | Rack up points (& Win Prizes)
            </p>
            <p className="mt-3 max-w-md mx-auto text-sm text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Point-based interactive database for film & TV
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounsded-md shadow">
                <a
                  href="me.com"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                >
                  How It works
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
