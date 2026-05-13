/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingCart, Menu, Search } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-12">
            <a href="/" className="text-2xl font-bold tracking-tighter text-black">
              CODAPHICS<span className="text-orange-500">.</span>
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <a href="#courses" className="hover:text-black transition-colors">Courses</a>
              <a href="#" className="hover:text-black transition-colors">Instructors</a>
              <a href="#" className="hover:text-black transition-colors">Business</a>
              <a href="#" className="hover:text-black transition-colors">Scholarship</a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 w-64 focus-within:border-orange-200 transition-all">
              <Search className="w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 outline-none"
              />
            </div>
            <button className="relative p-2 text-gray-600 hover:text-black transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full" />
            </button>
            <div className="hidden sm:flex items-center gap-3">
              <button className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-black transition-colors">
                Sign In
              </button>
              <button className="px-5 py-2.5 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
                Get Started
              </button>
            </div>
            <button className="md:hidden p-2 text-gray-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-orange-600 bg-orange-50 rounded-full">
                New: Generative AI for Creators
              </span>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-[0.9] mb-8">
                Elevate your <br />
                <span className="text-orange-500 italic font-serif font-normal">potential</span> today.
              </h1>
              <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Expert-led courses designed for the next generation of digital leaders. 
                Learn industry-standard skills from world-class professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-xl shadow-black/20">
                  Explore Courses
                </button>
                <button className="px-8 py-4 bg-white border-2 border-gray-100 text-gray-900 rounded-full font-bold text-lg hover:border-gray-200 hover:bg-gray-50 transition-all">
                  Join for Free
                </button>
              </div>
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white"
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Student"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  <span className="font-bold text-black text-base">45k+</span> students already joined
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border-4 border-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
                alt="Students collaborating" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <p className="text-white font-medium italic text-lg leading-snug">
                    "This course transformed how I view design systems. Highly recommended!"
                  </p>
                  <p className="text-white/70 text-sm mt-3 uppercase tracking-widest font-bold">
                    — Mark V. (Senior Designer at Figma)
                  </p>
                </div>
              </div>
            </div>
            {/* Abstract shapes */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
