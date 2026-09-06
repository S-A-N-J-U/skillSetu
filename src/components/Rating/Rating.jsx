import React from 'react';
import { motion } from 'framer-motion';


const REVIEWS_DATA = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    comment: "Skill Setu completely transformed my approach to building practical skills. The structured roadmap and mentor guidance were game changers for my job search!",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Data Analyst",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    comment: "The dashboard metrics and feedback feature helped me focus on my exact weak areas. Highly recommended for any student looking to elevate their career.",
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    comment: "Connecting with peers and showcasing projects on one single platform made learning fun and collaborative. Absolutely loved the experience!",
  },
];

function Rating() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
     
      <div className="w-full text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
          What Our Students Say
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Join thousands of successful students who transformed their careers with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {REVIEWS_DATA.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 flex flex-col justify-between transition-all duration-300"
          >
            <div>
             
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl select-none">
                    ★
                  </span>
                ))}
              </div>

             
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                "{review.comment}"
              </p>
            </div>

          
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
              />
              <div className="text-left">
                <h4 className="text-base font-bold text-gray-900 leading-tight">
                  {review.name}
                </h4>
                <p className="text-xs text-blue-600 font-medium">
                  {review.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Rating;