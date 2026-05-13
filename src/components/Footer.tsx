/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, ShieldCheck, Zap, Globe } from 'lucide-react';

const FEATURES = [
  {
    icon: <CheckCircle2 className="w-8 h-8 text-orange-500" />,
    title: "Expert Mentorship",
    description: "Get direct feedback and guidance from industry veterans who have worked at top tech companies."
  },
  {
    icon: <Zap className="w-8 h-8 text-orange-500" />,
    title: "Flexible Learning",
    description: "Learn at your own pace with lifetime access to all course materials and future updates."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
    title: "Verified Certificates",
    description: "Receive industry-recognized certificates that you can add to your LinkedIn or Resume."
  },
  {
    icon: <Globe className="w-8 h-8 text-orange-500" />,
    title: "Global Community",
    description: "Join thousands of students worldwide. Network, collaborate, and grow your career together."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" 
                alt="Workspace" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                    <img src="https://i.pravatar.cc/100?img=33" alt="CODAPHICS" />
                  </div>
                  <div>
                    <p className="text-white font-bold">CODAPHICS Community</p>
                    <p className="text-white/60 text-xs">JOINED BY 50,000+ CREATIVES</p>
                  </div>
                </div>
                <h3 className="text-3xl text-white font-bold leading-tight">
                  "The community alone is worth more than the course price."
                </h3>
              </div>
            </div>
            {/* Stats box */}
            <div className="absolute -top-10 -right-10 hidden sm:block bg-black p-8 rounded-2xl shadow-xl">
              <p className="text-orange-500 text-5xl font-black mb-1">98%</p>
              <p className="text-white/60 text-sm font-bold uppercase tracking-widest">Success Rate</p>
            </div>
          </div>

          <div>
            <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-4 inline-block">Our Advantage</span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8 leading-tight">
              We provide the tools, <br />
              you define your <span className="text-orange-500 italic font-serif font-normal">future</span>.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {FEATURES.map((feature, i) => (
                <div key={i} className="group">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <a href="/" className="text-2xl font-black tracking-tighter mb-8 block">
              CODAPHICS<span className="text-orange-500">.</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              World-class learning platform for designers, developers, and entrepreneurs who want to build the future.
            </p>
            <div className="flex gap-4">
              {/* Dummy social icons */}
              <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                <span className="font-bold">In</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                <span className="font-bold">Tw</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                <span className="font-bold">Ig</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Platform</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">All Courses</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Mentorship</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">For Business</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Curriculum</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Partner Program</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe to get the latest updates on new courses and industry insights.
            </p>
            <div className="bg-gray-900 rounded-full p-1.5 flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="bg-transparent border-none focus:ring-0 text-sm px-4 py-2 outline-none w-full"
              />
              <button className="bg-orange-500 text-black font-bold px-6 py-2 rounded-full text-xs hover:bg-orange-400 transition-colors">
                SIGN UP
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2024 CODAPHICS. All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
