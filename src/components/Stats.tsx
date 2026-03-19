export function Stats() {
  const stats = [
    { value: '50+', label: 'Events Updated Daily', subtext: 'Contests & Hackathons' },
    { value: '5+', label: 'Platforms Integrated', subtext: 'And growing' },
    { value: '100%', label: 'Free & Open', subtext: 'Always' },
    { value: '99.9%', label: 'Uptime Guaranteed', subtext: 'Always available' },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Numbers Speak for Themselves
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
            Building the ultimate platform to aggregate contests and hackathons in one place.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <div className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-lg font-bold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm font-semibold text-blue-100">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}