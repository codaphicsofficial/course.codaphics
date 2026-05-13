/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Clock, Users, ArrowRight } from 'lucide-react';
import { Course, MOCK_COURSES } from '../types';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      layout
      whileHover={{ y: -10 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest rounded-full text-black">
            {course.category}
          </span>
          <span className={`px-2 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full ${
            course.level === 'Beginner' ? 'bg-green-600' : 
            course.level === 'Intermediate' ? 'bg-orange-500' : 'bg-red-600'
          }`}>
            {course.level}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center text-orange-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm font-bold text-gray-900">{course.rating}</span>
          </div>
          <span className="text-gray-400 text-xs">({course.reviewsCount.toLocaleString()})</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-gray-500 text-sm mb-6 line-clamp-2">
          {course.description}
        </p>

        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium">{course.instructor}</span>
            <span className="text-2xl font-black text-gray-900">${course.price}</span>
          </div>
          <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all transform group-hover:rotate-[-45deg]">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function CourseGrid() {
  return (
    <section id="courses" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Our most <span className="italic font-serif font-normal">popular</span> courses
            </h2>
            <p className="text-gray-500 max-w-xl">
              From creative design to high-level engineering, build the skill set that gets you hired.
            </p>
          </div>
          <div className="flex gap-2">
            {['All', 'Design', 'Development', 'Business'].map((cat) => (
              <button 
                key={cat}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                  cat === 'All' 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-12 py-4 border-2 border-gray-900 font-bold rounded-full hover:bg-gray-900 hover:text-white transition-all">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
