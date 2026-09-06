import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// FAQ Content Data
const FAQ_DATA = [
  {
    id: 1,
    question: "What is Skill Setu?",
    answer: "Skill Setu is a comprehensive platform designed to bridge the gap between academic learning and real-world career opportunities. It helps students track progress, showcase skills, and receive structured feedback."
  },
  {
    id: 2,
    question: "How do I update my profile and academic credentials?",
    answer: "You can easily update your CGPA, core skills, project portfolio, and extracurricular achievements directly through your personal Dashboard."
  },
  {
    id: 3,
    question: "Is Skill Setu free for students?",
    answer: "Yes! Skill Setu offers a free core tier that provides students access to essential dashboard analytics, project posting, and peer networking."
  },
  {
    id: 4,
    question: "How does the feedback and mentorship system work?",
    answer: "You can request direct project reviews and career advice from verified mentors. Mentors provide actionable feedback to ensure your technical skills match industry standards."
  }
];

function FAQ() {
  // State to track which item is open (null = all closed)
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions? We’ve got answers. If you can’t find what you’re looking for, feel free to reach out to our team.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQ_DATA.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                {/* Animated Chevron Icon */}
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="shrink-0 text-gray-500"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>

              {/* Animated Expandable Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600 text-base leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;