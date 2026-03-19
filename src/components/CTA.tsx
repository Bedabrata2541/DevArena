import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="relative text-center p-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950/20 border-2 border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden group hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-500 hover:shadow-2xl">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-6 font-bold">
              Start Your Journey Today
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers who never miss a contest. Get started for free — no signup required.
            </p>

            <div className="max-w-md mx-auto mb-8">
              <a
                href="#contests"
                className="inline-flex items-center justify-center gap-2 group px-10 py-4 bg-blue-600 text-white border-2 border-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
              >
                Browse All Contests
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No signup needed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Instant access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}