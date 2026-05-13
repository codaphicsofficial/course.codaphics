/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Design' | 'Development' | 'Business' | 'Marketing';
  image: string;
}

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Advanced UI Design Systems',
    instructor: 'Sarah Jenkins',
    description: 'Master the art of creating scalable, accessible design systems for enterprise applications.',
    price: 89.99,
    rating: 4.8,
    reviewsCount: 1240,
    duration: '12h 30m',
    level: 'Advanced',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Full-Stack Web Development',
    instructor: 'David Chen',
    description: 'Learn React, Node.js, and PostgreSQL by building 10 real-world projects from scratch.',
    price: 129.99,
    rating: 4.9,
    reviewsCount: 3500,
    duration: '45h 0m',
    level: 'Intermediate',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Digital Marketing Strategy 2024',
    instructor: 'Emma Rodriguez',
    description: 'A comprehensive guide to SEO, SEM, and social media marketing in the modern landscape.',
    price: 59.99,
    rating: 4.7,
    reviewsCount: 890,
    duration: '10h 15m',
    level: 'Beginner',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Product Leadership: 0 to 1',
    instructor: 'Michael Scott',
    description: 'How to manage cross-functional teams and launch high-impact products successfully.',
    price: 99.99,
    rating: 4.6,
    reviewsCount: 560,
    duration: '15h 45m',
    level: 'Advanced',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Mastering TypeScript & Clean Code',
    instructor: 'Alex Rivera',
    description: 'Deep dive into advanced TypeScript patterns, decorators, and solid architectural principles.',
    price: 74.99,
    rating: 5.0,
    reviewsCount: 420,
    duration: '8h 20m',
    level: 'Advanced',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'UX Research & User Testing',
    instructor: 'Lisa Wong',
    description: 'Learn how to conduct user interviews, usability tests, and synthesize qualitative data.',
    price: 49.99,
    rating: 4.8,
    reviewsCount: 710,
    duration: '9h 10m',
    level: 'Beginner',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop'
  }
];
