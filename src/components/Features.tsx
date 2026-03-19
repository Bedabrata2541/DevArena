import { Bell, Calendar, Filter, Zap, Shield, Award } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Calendar,
      title: 'Unified Calendar',
      description: 'View all upcoming contests from 5+ platforms in one comprehensive calendar.',
    },
    {
      icon: Bell,
      title: 'Smart Reminders',
      description: 'Never miss a contest with intelligent notifications for your preferred platforms.',
    },
    {
      icon: Filter,
      title: 'Advanced Filters',
      description: 'Filter by difficulty, duration, prizes, and platforms to find your perfect match.',
    },
    {
      icon: Zap,
      title: 'Real-time Sync',
      description: 'Instant updates when new contests are announced or schedules change.',
    },
    {
      icon: Award,
      title: 'Track Your Progress',
      description: 'Monitor your contest history and performance across all platforms.',
    },
    {
      icon: Shield,
      title: 'Verified Data',
      description: 'Accurate contest information directly from official platform sources.',
    },
  ];

  return (
    <section id="features" className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Compete
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Powerful features built for competitive programmers who take their skills seriously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-600 dark:bg-blue-500 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-600/20">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}