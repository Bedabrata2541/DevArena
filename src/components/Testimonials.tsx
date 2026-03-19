import { Globe, Zap, Users, Check } from 'lucide-react';

export function Testimonials() {
  const benefits = [
    'Never miss a contest or hackathon again',
    'Save hours of research across multiple platforms',
    'Real-time countdown timers keep you on track',
    'Filter by status to find what matters to you',
    'Beautiful, distraction-free interface',
    '100% free and always will be',
  ];

  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access contests and hackathons worldwide',
      color: 'blue',
    },
    {
      icon: Zap,
      title: 'Instant Updates',
      description: 'Real-time data refreshes every minute',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built for developers, by developers',
      color: 'blue',
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16">
          Why Developers Love DevArena
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Benefits list */}
          <div className="space-y-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <Check className="w-4 h-4 text-white stroke-[3]" />
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Right side - Feature cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600 dark:bg-blue-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}