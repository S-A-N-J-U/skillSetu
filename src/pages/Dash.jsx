import React from 'react'
import { motion } from "framer-motion";
import ScoreGauge from '@/components/Dashboard/ScoreGauge';
import RightDashboard from '@/components/Dashboard/RightDashboard';
import { ChartBarMultiple } from '@/components/Dashboard/ChartBarMultiple';
import Project from '@/components/Dashboard/Project';
import Ai from '../Ai';

function Dash() {
  return (
    <>



     {/* <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="w-full flex justify-start text-2xl font-bold text-gray-900 mb-4 ml-2">
          Dashboard
        </h2>
      </motion.div>

      <div className="flex items-center justify-center p-2 gap-4">
        <motion.div
          id="left-dashboard"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-500 w-2/3 p-2 flex flex-col gap-4"
        >
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-xl shadow-md border border-gray-100 p-4"
          >
            <ScoreGauge value={100} />
          </motion.div>


        <ChartBarMultiple/>

        <Project/>



        </motion.div>

        <motion.div
          id="right-dashboard"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-500 w-1/3 overflow-auto rounded-xl shadow-md border border-gray-100 mt-2 bg-white"
        >
          <RightDashboard />
        </motion.div>
      </div> */}



    <Ai/>



    </>
  )
}

export default Dash


