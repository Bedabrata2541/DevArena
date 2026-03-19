export function Hero() {
  return (
    <section className="relative px-6 lg:px-8 pt-32 pb-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(0,0,0,0))]"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-[8rem] font-bold text-gray-900 dark:text-white mb-8 max-w-6xl mx-auto leading-[0.95] tracking-tighter">
            Hackathons & Contests,<br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">All in One Place</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Never miss another opportunity. DevArena aggregates coding contests and hackathons from <span className="text-blue-600 dark:text-blue-400 font-bold">CodeChef, Codeforces, Unstop, Devfolio, HackerRank</span> — all in real-time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <button className="group px-10 py-4 bg-blue-600 dark:bg-blue-500 text-white border-2 border-blue-600 dark:border-blue-500 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20 hover:scale-105 active:scale-95 font-bold text-lg">
            Browse Contests
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button className="group px-10 py-4 bg-white dark:bg-gray-950 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-full hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 font-bold text-lg">
            Explore Hackathons
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}