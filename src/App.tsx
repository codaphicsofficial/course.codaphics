/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero } from './components/Header';
import { CourseGrid } from './components/CourseSection';
import { WhyChooseUs, Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <main>
        <Hero />
        
        {/* Trusted By Section */}
        <section className="py-12 border-y border-gray-100 bg-gray-50/30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-gray-100 pb-4 inline-block mx-auto">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="text-2xl font-black italic tracking-tighter">Google</span>
               <span className="text-2xl font-black tracking-widest uppercase">Meta</span>
               <span className="text-2xl font-black flex items-center gap-1">
                 <div className="w-6 h-6 bg-black rounded-full" /> Spotify
               </span>
               <span className="text-2xl font-black tracking-tighter">Microsoft</span>
               <span className="text-2xl font-black tracking-tighter lowercase">airbnb</span>
            </div>
          </div>
        </section>

        <CourseGrid />
        <WhyChooseUs />

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto bg-black rounded-[3rem] p-12 sm:p-24 text-center relative overflow-hidden shadow-2xl shadow-orange-500/10">
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
                Ready to start your <br />
                <span className="text-orange-500 italic font-serif font-normal">legendary</span> career?
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                Join 50,000+ students already building their future with CODAPHICS. 
                Get lifetime access to our premium course library today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-12 py-5 bg-orange-500 text-black font-black rounded-full text-lg hover:bg-orange-400 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-orange-500/20">
                  Explore Courses
                </button>
                <button className="px-12 py-5 bg-white/5 backdrop-blur-md text-white font-black border border-white/10 rounded-full text-lg hover:bg-white/10 transition-all">
                  Join Discord
                </button>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full filter blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

