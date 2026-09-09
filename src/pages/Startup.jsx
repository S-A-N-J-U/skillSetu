import React from 'react'
import { motion } from 'framer-motion'
import { Check, AlertCircle, ExternalLink } from 'lucide-react'

function Startup() {
  const startupIdeas = [
    {
      title: 'AI Hyper-Personalized Health Coach',
      category: 'HEALTHTECH / AI',
      description:
        'A mobile platform integrating wearable metrics and real-time biometric tracking to generate micro-tailored fitness and dietary actions using lightweight LLMs.',
    },
    {
      title: 'Decentralized Agri-Logistics Marketplace',
      category: 'AGRITECH / SUPPLY CHAIN',
      description:
        'Connecting small-hold farmers directly with tier-2 city distributors, optimizing farm-to-table delivery routes, reducing produce waste, and boosting profits.',
    },
    {
      title: 'Build seaweed',
      category: 'Clean Technology (CleanTech) & Green Energy',
      description:
        'Build seaweed-based bio-diesel production hubs to power commercial trucks for scalable, carbon-neutral logistics solutions.',
    },
  ]

  const govSchemes = [
    {
      name: 'Startup India Seed Fund Scheme (SISFS)',
      benefit: 'Financial assistance up to ₹20 Lakhs for POC/prototyping and up to ₹50 Lakhs for commercialization via incubators.',
      link: 'https://seedfund.startupindia.gov.in/',
    },
    {
      name: 'DPIIT Recognition & Tax Exemption (Section 80-IAC)',
      benefit: '100% tax rebate on profits for 3 consecutive years and simplified compliance norms for Indian startups.',
      link: 'https://www.startupindia.gov.in/',
    },
    {
      name: 'MSME Champions & CGTMSE Scheme',
      benefit: 'Collateral-free credit facility up to ₹2 Crores for eligible micro and small enterprises through commercial banks.',
      link: 'https://champions.gov.in/',
    },
    {
      name: 'MeitY SAMRIDH Scheme',
      benefit: 'Matching funds up to ₹40 Lakhs and acceleration support for tech startups from selected incubators.',
      link: 'https://meitystartuphub.in/',
    },
  ]

  const resources = [
    { name: 'Startup India Portal', type: 'Official Portal', url: 'https://www.startupindia.gov.in/' },
    { name: 'BHASKAR Registry', type: 'Ecosystem Networking', url: 'https://bhaskar.startupindia.gov.in/' },
    { name: 'MAARG Mentorship Platform', type: 'Mentorship', url: 'https://maarg.startupindia.gov.in/' },
    { name: 'Y Combinator Library', type: 'Playbooks & Guides', url: 'https://www.ycombinator.com/library' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-10 shadow-sm relative flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left space-y-2 max-w-2xl">
            <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase">
              Ecosystem Readiness
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Startup Execution Score
            </h1>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Overall, your startup profile presents a solid foundation with high scalability potential in tech and logistics. There's strong eligibility for Indian government grants and incubator backing.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center shrink-0">
            <div className="w-24 h-24 rounded-full border-4 border-indigo-600 flex items-center justify-center text-indigo-600 font-extrabold text-2xl shadow-inner bg-indigo-50/30">
              85%
            </div>
            <button className="mt-3 text-xs font-bold text-indigo-600 hover:underline">
              Re-evaluate Readiness
            </button>
          </div>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-emerald-50/40 border border-emerald-200/80 rounded-3xl p-6 md:p-8 space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">💪</span>
              <h2 className="text-lg font-bold text-emerald-900">
                Top High-Potential Ideas
              </h2>
            </div>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {startupIdeas.map((idea, idx) => (
                <motion.li key={idx} variants={cardVariants} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-emerald-800 tracking-wide uppercase block">
                      {idea.category}
                    </span>
                    <p className="text-slate-800 text-sm font-semibold">
                      {idea.title}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                      {idea.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-amber-50/40 border border-amber-200/80 rounded-3xl p-6 md:p-8 space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">💡</span>
              <h2 className="text-lg font-bold text-amber-900">
                Government Funding Schemes
              </h2>
            </div>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {govSchemes.map((scheme, idx) => (
                <motion.li key={idx} variants={cardVariants} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-slate-800 text-sm font-semibold">
                      {scheme.name}
                    </p>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {scheme.benefit}
                    </p>
                    <a
                      href={scheme.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:underline pt-1"
                    >
                      Apply via Official Portal <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>

       
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-slate-200/80 rounded-3xl p-8 space-y-6 shadow-sm"
        >
          <h2 className="text-xl font-bold text-slate-900 text-center">
            Key Resource Ratings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((res, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
                  <span className="flex items-center gap-2">
                    {res.name}
                    <a href={res.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 hover:text-indigo-600" />
                    </a>
                  </span>
                  <span className="text-indigo-600 font-bold">80% Match</span>
                </div>
                
          
                <div className="w-full h-2.5 bg-slate-200/80 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full w-[80%]" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Startup