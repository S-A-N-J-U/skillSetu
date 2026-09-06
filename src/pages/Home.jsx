import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, Features, Rating, FAQ } from '../components';
import feedback from '../components/Images/feedback.webp';
import dashboard from '../components/Images/dashboard.webp';
import post from '../components/Images/post.webp';
import global from '../assets/global.mp4';
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import ScoreGauge from '@/components/Dashboard/ScoreGauge';
import UserProfile from '@/components/Dashboard/Profile';
import Aboutme from '@/components/Dashboard/Aboutme';

const FEATURES_DATA = [
  {
    title: "Dashboard",
    p: "The Skill Setu Dashboard is your personal hub to manage and showcase your profile. Effortlessly add and update your CGPA, core skills, hobbies, and achievements to present a complete, modern snapshot of your academic and creative growth.",
    src: dashboard,
  },
  {
    title: "Posts",
    p: "Explore and share posts within the community to build connections and showcase progress.",
    src: post,
  },
  {
    title: "Feedback Support",
    p: "Get real-time feedback and direct mentor support to stay aligned with industry goals.",
    src: feedback,
  },
];

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService
      .getPosts()
      .then((response) => {
        if (response?.documents) setPosts(response.documents);
      })
      .catch((err) => console.error("Error fetching posts:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full py-8 text-center min-h-[60vh] flex items-center justify-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <h2 className="text-2xl font-semibold text-gray-600">Loading...</h2>
          </motion.div>
        </Container>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center overflow-hidden">
        <Container>

          <div className="flex w-full min-h-screen rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-1/3 bg-[#ecf5fc] flex flex-col justify-center items-center p-8 text-center relative"
            >
              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight"
              >
                Skill Setu
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                className="text-gray-600 text-base max-w-sm leading-relaxed"
              >
                Bridging the gap between learning and opportunities. Empowering your journey to master future-ready skills.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="mt-6"
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Get Started
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-2/3 flex items-center justify-center bg-black overflow-hidden"
            >
              <video
                src={global}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-90"
              />
            </motion.div>
          </div>


          <div className="w-full py-16 space-y-8">
            {FEATURES_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.01 }}
              >
                <Features
                  title={item.title}
                  p={item.p}
                  src={item.src}
                  className="flex items-center justify-around hover:bg-blue-50 transition-colors duration-300 rounded-2xl m-2 p-10 border border-gray-100 shadow-sm"
                  paraClassName="px-10 text-left"
                  titleClassName="text-left px-10"
                />
              </motion.div>
            ))}
          </div>


          <Rating />


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <FAQ />
          </motion.div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <UserProfile/>
      <Aboutme/>
    </div>
  );
}

export default Home;