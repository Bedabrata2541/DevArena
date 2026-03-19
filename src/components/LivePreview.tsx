import { Calendar, Clock, ExternalLink, TrendingUp } from 'lucide-react';

export function LivePreview() {
  const contests = [
    {
      platform: 'Codeforces',
      title: 'Codeforces Round #927 (Div. 3)',
      status: 'Live',
      participants: '12.5K',
      timeLeft: '2h 15m left',
      difficulty: 'Division 3',
      color: 'blue',
    },
    {
      platform: 'CodeChef',
      title: 'Starters 115 (Rated)',
      status: 'Upcoming',
      participants: '8.2K registered',
      timeLeft: 'Starts in 4h',
      difficulty: 'All divisions',
      color: 'orange',
    },
    {
      platform: 'Unstop',
      title: 'Tech Innovation Challenge 2025',
      status: 'Upcoming',
      participants: '5.8K registered',
      timeLeft: 'Starts in 1d 6h',
      difficulty: 'Open to all',
      color: 'cyan',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-600',
        border: 'border-blue-200 dark:border-blue-900/30',
        badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
        status: 'bg-green-500',
      },
      orange: {
        bg: 'bg-orange-600',
        border: 'border-orange-200 dark:border-orange-900/30',
        badge: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
        status: 'bg-yellow-500',
      },
      cyan: {
        bg: 'bg-cyan-500',
        border: 'border-cyan-200 dark:border-cyan-900/30',
        badge: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400',
        status: 'bg-yellow-500',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Live Contest Feed
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Real-time updates from all major platforms. See what's happening right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contests.map((contest, index) => {
            const colors = getColorClasses(contest.color);
            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-950 border-2 ${colors.border} rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden`}
              >
                {/* Status indicator */}
                <div className="absolute top-4 right-4">
                  <div className={`flex items-center gap-2 px-3 py-1 ${colors.badge} rounded-full`}>
                    <div className={`w-2 h-2 ${colors.status} rounded-full ${contest.status === 'Live' ? 'animate-pulse' : ''}`}></div>
                    <span className="text-xs font-bold">{contest.status}</span>
                  </div>
                </div>

                {/* Platform badge */}
                <div className={`inline-block ${colors.bg} text-white px-4 py-1.5 rounded-lg mb-4 font-bold text-sm`}>
                  {contest.platform}
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pr-20 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {contest.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">{contest.timeLeft}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">{contest.participants}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">{contest.difficulty}</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-bold">
                  View Contest
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}