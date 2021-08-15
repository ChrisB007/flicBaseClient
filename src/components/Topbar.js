const navigation = [
  { name: "Solutions", href: "www.me.com" },
  { name: "Pricing", href: "www.me.com" },
  { name: "Docs", href: "www.me.com" },
  { name: "Contact us", href: "/contact" },
];

export default function Topbar() {
  return (
    <header className="bg-black">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-green-500 lg:border-none">
          <div className="flex items-center">
            <a href="/dashboard">
              <span className="sr-only">Flicbase</span>
              <img className="logo" src="/images/logo.png" alt="logo" />
              flicBase
            </a>
          </div>
          <div className="ml-10 space-x-4 logout">
            <a
              href="www.me.com"
              className="inline-block bg-green-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign Out
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-green-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
