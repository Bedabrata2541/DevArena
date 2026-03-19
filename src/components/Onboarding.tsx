export function Onboarding() {
  const steps = [
    {
      number: '1',
      title: 'Browse Events',
      description: 'Explore upcoming contests and hackathons from all platforms in one place.',
    },
    {
      number: '2',
      title: 'Filter & Sort',
      description: 'Filter by status (ongoing/upcoming) and find events that match your interests.',
    },
    {
      number: '3',
      title: 'Register & Compete',
      description: 'Click on any event to register directly on the platform and start competing.',
    },
  ];

  return (
    <section id="onboarding" className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-20">
          Get Started in 3 Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -top-5 left-6 z-10">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {step.number}
                </div>
              </div>
              <div className="pt-10 p-8 border-2 border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-gradient-to-b from-white to-blue-50/20 dark:from-gray-950 dark:to-blue-950/10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}