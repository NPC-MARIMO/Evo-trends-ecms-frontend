import React from 'react';
import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';
import Logoimg from '../../assets/logo.jpg'

// Main Login Layout Component
const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-tr from-white via-indigo-50 to-purple-50">
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              className="flex items-center justify-center lg:justify-start mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={Logoimg}
                alt="Jhankaar Logo"
                className="w-12 h-12 mr-3 object-cover rounded-lg shadow-md"
                style={{ background: "#fff" }}
              />
              <h1 className="text-4xl font-light tracking-widest text-indigo-800">
                THE<span className="text-[#B38A69]">JHANKAAR</span>
              </h1>
            </motion.div>
            
            <motion.h2 
              className="text-6xl font-thin mb-6 text-indigo-900 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Timeless
              <br />
              <span className="text-[#B38A69]">Elegance</span>
              <br />
              Awaits
            </motion.h2>
            
            <motion.p 
              className="text-xl text-indigo-400 mb-8 font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Where every piece tells a story of craftsmanship and luxury
            </motion.p>

            {/* Decorative Elements */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="w-2 h-16 bg-[#B38A69] rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: item * 0.3
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-indigo-100/40 shadow-2xl"
          >
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
            </motion.div>

            {/* Form Outlet */}
            <Outlet/> 

            <motion.div 
              className="mt-8 pt-6 border-t border-indigo-100/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;