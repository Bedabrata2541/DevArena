export function Platforms() {
  const platforms = [
    { name: 'CodeChef', bg: 'bg-orange-600 hover:bg-orange-700' },
    { name: 'Codeforces', bg: 'bg-blue-600 hover:bg-blue-700' },
    { name: 'Unstop', bg: 'bg-cyan-500 hover:bg-cyan-600' },
    { name: 'Devfolio', bg: 'bg-purple-600 hover:bg-purple-700' },
    { name: 'HackerRank', bg: 'bg-green-600 hover:bg-green-700' },
  ];

  return (
    <section id="platforms" className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Supported Platforms
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-16 font-medium">
          All major competitive programming and hackathon platforms in one place
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`${platform.bg} text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer font-bold text-lg`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {platform.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}