import React from 'react'
import { motion } from 'framer-motion'
import One from '../../assets/One.png'
import Two from '../../assets/Two.png'
import Three from '../../assets/Two.png'
import Four from '../../assets/Two.png'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 60
    }
  }),
}

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, type: 'spring', stiffness: 60 } }
}
const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, type: 'spring', stiffness: 60 } }
}

export default function Home() {
  return (
    <div>
      <motion.section 
        className="bg-[#fcf8f3] min-h-screen flex items-center justify-center "
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="flex flex-col md:flex-row items-stretch gap-12  w-full">
          {/* Left: Hero Image */}
          <motion.div
            className="flex-shrink-0 self-stretch"
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
          >
            <motion.img
              src={One}
              alt="Elegant woman with jewellery"
              className="w-[370px] md:w-[570px] object-cover"
              style={{ minHeight: "80vh", scaleX: "-1"  }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
          {/* Right: Hero Content */}
          <motion.div
            className="flex-1 flex flex-col justify-center md:pl-12 mt-10 md:mt-0"
            initial="hidden"
            animate="visible"
            variants={fadeRight}
          >
            <motion.span
              className="text-[#b69b85] font-medium text-base mb-2 md:mb-3"
              variants={fadeUp}
              custom={1}
            >
              Elevate Your Elegance
            </motion.span>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-[#3e3228] mb-4 leading-tight"
              variants={fadeUp}
              custom={2}
            >
              <span className="font-bold italic text-[#343332]">Uncover the</span>
            </motion.h1>
            <motion.p
              className="text-[#665d56] text-lg md:text-xl mb-6 max-w-xl leading-relaxed"
              variants={fadeUp}
              custom={3}
            >
              Discover the Extraordinary: Jewellery that Captivates the Senses. Crafted with Passion, Designed for the Discerning
            </motion.p>
            <motion.button
              className="bg-[#b38a69] hover:bg-[#9c7659] text-white px-8 py-3 rounded font-semibold shadow-md w-fit transition-colors duration-200 mb-8"
              variants={fadeUp}
              custom={4}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Now
            </motion.button>
            <motion.span
              className="text-[#847567] text-sm md:text-base tracking-wide"
              variants={fadeUp}
              custom={5}
            >
              Embrace the Exceptional: Unlock a World of Luxurious
            </motion.span>
          </motion.div>
          {/* Optionally add decorative leaf graphics on the right for more fidelity */}
        </div>
      </motion.section>
      <motion.section
        className="bg-[#464f38] py-16 px-2 md:px-0 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="flex flex-row w-full max-w-7xl items-center justify-between gap-7 md:gap-10">
          {/* Leftmost vertical logo */}
          <motion.div 
            className="flex flex-col items-center w-20"
            variants={fadeLeft}
          >
            <motion.div
              className="bg-[#454c35] rounded-lg flex flex-col items-center justify-center w-16 h-32"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="https://i.imgur.com/bj5P09t.png"
                alt="Vertical Logo"
                className="w-10 h-20 object-contain"
                style={{ marginBottom: "0.25rem" }}
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: true }}
              />
              <motion.span
                className="mt-2 text-xs text-[#b9c1ac] tracking-widest"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >JEWELS</motion.span>
            </motion.div>
          </motion.div>
          {/* Grid of features */}
          <motion.div
            className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                className="flex flex-col items-center"
                key={i}
                custom={i}
                variants={fadeUp}
              >
                <motion.span className="mb-2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.17 }}
                  viewport={{ once: true }}
                >
                  {
                    // icons:
                    i === 0 ? (
                      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#eaddc1" strokeWidth="1.8"><rect x="4" y="6" width="16" height="12" rx="2" stroke="#eaddc1" strokeWidth="1.6" /><path d="M4 10h16" stroke="#eaddc1" strokeWidth="1.6" /><rect x="9" y="13" width="6" height="1.5" rx=".6" fill="#eaddc1" /></svg>
                    ) : i === 1 ? (
                      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#eaddc1" strokeWidth="1.7"><circle cx="12" cy="12" r="9" stroke="#eaddc1" strokeWidth="1.6"/><path d="M12 12l2.5-4.5" stroke="#eaddc1" strokeWidth="1.6" strokeLinecap="round"/><circle cx="12" cy="15.5" r="1.5" fill="#eaddc1" /></svg>
                    ) : i === 2 ? (
                      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#eaddc1" strokeWidth="1.6"><circle cx="12" cy="12" r="9" stroke="#eaddc1" strokeWidth="1.6"/><path d="M12 7v5l3 3" stroke="#eaddc1" strokeWidth="1.6" strokeLinecap="round" /></svg>
                    ) : (
                      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#eaddc1" strokeWidth="1.7"><path d="M17 8.5a5 5 0 1 1-10 0M12 15.5V6" stroke="#eaddc1" strokeWidth="1.6" strokeLinecap="round" /><path d="M12 15.5l3.2 3.2m-3.2-3.2l-3.2 3.2" stroke="#eaddc1" strokeWidth="1.6" strokeLinecap="round" /></svg>
                    )
                  }
                </motion.span>
                <motion.span
                  className={`font-semibold text-[#ede8da] text-lg${i === 2 ? " text-center" : ""}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 + i * 0.12, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {i === 0 && 'Reach Out'}
                  {i === 1 && 'Connect For'}
                  {i === 2 && <>Discover the Art<br className="hidden md:block" />of Personalisation</>}
                  {i === 3 && 'Elevate Your'}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        className="flex justify-center min-h-screen items-center py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="flex flex-col md:flex-row gap-16 items-center max-w-6xl w-full">
          <motion.div
            className="flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ once: true }}
          >
            <motion.img
              src={One}
              alt="Elegant woman wearing jewellery"
              className="bg-[#c5c2c2] object-cover shadow-md w-[400px] h-[470px] md:w-[440px] md:h-[520px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            />
          </motion.div>
          <motion.div
            className="flex-1 px-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeRight}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-semibold text-[#343332] mb-6"
              variants={fadeUp}
              custom={1}
            >
              <span className="italic font-bold">Timeless </span> <br />
              <span className="italic">Elegance</span>
            </motion.h1>
            <motion.p
              className="text-[#79787a] text-lg md:text-xl mt-10 mb-10 max-w-xl leading-relaxed"
              variants={fadeUp}
              custom={2}
            >
              Discover the Extraordinary: Our Jewellery Collection Transcends Time, Embodying the Essence of Luxury and Refinement. Elevate your style with pieces that captivate the senses and make a lasting impression.
            </motion.p>
            <motion.button
              className="bg-[#7d5a39]  text-white px-10 py-4 text-lg shadow-lg font-semibold hover:bg-[#694b2e] transition-all duration-200"
              variants={fadeUp}
              custom={3}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-16 items-center max-w-6xl">
          <motion.div
            className="flex-1 px-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-semibold text-[#2c2926] mb-6"
              variants={fadeUp}
              custom={1}
            >
              Uncover <span className="italic font-bold text-[#7d5a39]">Unique Designs</span>
            </motion.h2>
            <motion.p
              className="text-[#79787a] text-lg md:text-xl mb-8 max-w-xl leading-relaxed"
              variants={fadeUp}
              custom={2}
            >
              From everyday elegance to statement pieces — find jewellery that fits every moment. Crafted with precision, made to inspire.
            </motion.p>
            <motion.button
              className="bg-[#343332] text-white px-8 py-3 text-lg font-semibold hover:bg-[#222] transition-all duration-200"
              variants={fadeUp}
              custom={3}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Collection
            </motion.button>
          </motion.div>
          <motion.div
            className="flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            variants={fadeRight}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-[340px] h-[420px] bg-[#e6e1db] flex items-center justify-center shadow-lg"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Placeholder for a product image, you may change src */}
              <motion.img
                src={Two}
                alt="Jewellery Design"
                className="object-cover shadow w-[340px] h-[420px]"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        className="py-20 bg-[#fcfaf6]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            className="flex flex-col items-center mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-semibold text-[#2c2926] mb-2 font-serif"
              variants={fadeUp}
              custom={1}
            >
              Curated Perfection
            </motion.h2>
            <motion.p
              className="text-[#7d5a39] mt-2 text-base md:text-lg font-light"
              variants={fadeUp}
              custom={2}
            >
              Elevate Your Look with Our Exclusive Jewellery Designs
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[0, 1].map(idx => (
              <motion.div
                className="flex flex-col items-center"
                key={idx}
                custom={idx}
                variants={fadeUp}
              >
                <motion.div
                  className="w-[330px] h-[385px] bg-[#ebe9e5] flex items-center justify-center shadow-lg mb-5"
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.08 + idx * 0.18, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.img
                    src={idx === 0 ? Three : Four}
                    alt={idx === 0 ? "Radiant Elegance - Timeless Allure" : "Captivating Style - Refined"}
                    className="object-cover w-[330px] h-[385px]"
                    initial={{ y: 32, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.17, duration: 0.6 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
                <motion.span
                  className="mt-2 font-semibold text-[#45413d] text-lg block"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + idx * 0.11, duration: 0.38 }}
                  viewport={{ once: true }}
                >
                  {idx === 0 ? 'Radiant Elegance' : 'Captivating Style'}
                </motion.span>
                <motion.span
                  className="text-[#7d5a39] font-light italic text-base"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 + idx * 0.06, duration: 0.35 }}
                  viewport={{ once: true }}
                >
                  {idx === 0 ? 'Timeless Allure' : 'Refined'}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        className="py-20 bg-[#fcfaf6]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.13 }}
        variants={fadeUp}
      >
        <div className="container mx-auto max-w-6xl px-4 flex flex-col items-center">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold text-[#2c2926] mb-2 font-serif"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Curated Perfection
          </motion.h2>
          <motion.p
            className="text-[#7d5a39] mt-2 text-base md:text-lg font-light"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.13 }}
            viewport={{ once: true }}
          >
            Elevate Your Style
          </motion.p>
          <div className="mt-12 w-full flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Left: Elegant woman portrait */}
            <motion.div
              className="w-full md:w-1/3 flex-shrink-0 flex items-center justify-center"
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=500&h=600&q=80"
                alt="Elegant woman wearing jewellery"
                className="object-cover rounded-lg shadow-lg w-[320px] h-[360px]"
                style={{ background: "#ede9e5" }}
                initial={{ scale: 0.93, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                viewport={{ once: true }}
              />
            </motion.div>
            {/* Right: Two jewelry product images */}
            <div className="w-full md:w-2/3 flex items-center justify-center gap-6">
              {[0, 1].map((idx) => (
                <motion.div
                  className="flex flex-col items-center gap-4"
                  key={idx}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.16 + idx * 0.14 }}
                  viewport={{ once: true }}
                >
                  <motion.img
                    src={
                      idx === 0
                        ? "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=220&q=80"
                        : "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=220&q=80"
                    }
                    alt={idx === 0 ? "Gold necklace with green jewel" : "Pear drop gold necklace"}
                    className="object-cover rounded-lg shadow-md w-[170px] h-[250px] bg-[#f8f7f2]"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.22 + idx * 0.12 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
