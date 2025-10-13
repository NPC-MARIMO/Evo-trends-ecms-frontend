import heroStyles from "./hero.module.css";
import aboutStyles from "./about.module.css";
import productStyles from "./product.module.css";
import { Link } from "react-router-dom";
import { MoveRight, ShoppingCart } from "lucide-react";
import { AboutLeft, Five, Four, HomeHeroBg, One, Three, Two } from "../../assets/index";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

const sectionVariants = {
  hidden: { opacity: 0, y: 72 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", bounce: 0.24 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, type: "spring", bounce: 0.24 }
  })
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay }
  })
};

export default function Home() {
  let aboutPara1 =
    "At Jhaankar, everypiece is handcrafted with passion, blending timeless artistry and modern elegance. We source our materials ethetically and work only with certified suppliers, ensuring every is as responsible as it is beautiful.";
  let aboutPara2 =
    "Experienced personalised services, unique designes, and a legacy of trust - making every purchase a celebration of style and intefrity.";

  let domain = "www.thejhaankar.com";

  const fiveProducts = [
    { image: One, name: "", price: "", description: "" },
    { image: Two, name: "", price: "", description: "" },
    { image: Three, name: "", price: "", description: "" },
    { image: Four, name: "", price: "", description: "" },
    { image: Five, name: "", price: "", description: "" }
  ];

  // Framer motion scroll animations for each section
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-18% 0px" });

  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-12% 0px" });

  const productRef = useRef(null);
  const productInView = useInView(productRef, { once: true, margin: "-15% 0px" });

  const contactWrapperRef = useRef(null);
  const contactInView = useInView(contactWrapperRef, { once: true, margin: "-12% 0px" });

  return (
    <div style={{ color: "#fff" }}>
      {/* hero section */}
      <motion.section
        ref={heroRef}
        id="hero"
        className={heroStyles.hero}
        style={{ color: "#fff", position: 'relative' }}
        variants={sectionVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <motion.img
          src={HomeHeroBg}
          alt=""
          initial={{ opacity: 0, scale: 1.12 }}
          animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.12 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />

        <motion.h1
          className={heroStyles.heroText1}
          style={{ color: "#fff", textShadow: "2px 2px 10px #000" }}
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          transition={{ delay: 0.15, type: "spring", bounce: 0.18 }}
        >
          The
        </motion.h1>
        <motion.h1
          className={heroStyles.heroText2}
          style={{ color: "#fff", textShadow: "2px 2px 10px #000" }}
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          transition={{ delay: 0.35, type: "spring", bounce: 0.18 }}
        >
          झंकार
        </motion.h1>

        <motion.div
          className={heroStyles.cart}
          initial={{ scale: 0, opacity: 0 }}
          animate={heroInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 0.55, type: "spring", bounce: 0.55, duration: 0.65 }}
        >
          <ShoppingCart color="#fff" />
        </motion.div>

        <motion.span
          className={heroStyles.domain}
          style={{ color: "#fff", textShadow: "1px 1px 4px #000" }}
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          transition={{ delay: 0.7, type: "spring", bounce: 0.25 }}
        >
          {" "}
          {domain}
        </motion.span>
      </motion.section>

      {/* about section */}
      <motion.section
        ref={aboutRef}
        id="about"
        className={aboutStyles.about}
        style={{ color: "#fff", background: "none" }}
        variants={sectionVariants}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
      >
        <motion.div
          style={{ display: "flex", justifyContent: "space-between" }}
          variants={fadeIn}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className={aboutStyles.aboutImg}
            initial={{ opacity: 0, x: -40 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ delay: 0.13, type: "spring", bounce: 0.3 }}
          >
            <img className={aboutStyles.aboutImage} src={AboutLeft} alt="" />
          </motion.div>
          <motion.div
            className={aboutStyles.aboutText}
            style={{ paddingLeft: "2rem", color: "#fff" }}
            initial={{ opacity: 0, x: 40 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.18, type: "spring", bounce: 0.2 }}
          >
            <div>
              <motion.h1
                style={{ color: "#fff" }}
                variants={fadeIn}
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
                transition={{ delay: 0.21 }}
              >
                Why
              </motion.h1>
              <motion.h1
                className={aboutStyles.jhankar}
                style={{
                  marginLeft: "14rem",
                  color: "#eee",
                  textShadow: "2px 2px 7px #000",
                  fontWeight: 700,
                }}
                variants={fadeIn}
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
                transition={{ delay: 0.33 }}
              >
                झंकार&nbsp;?
              </motion.h1>
            </div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              transition={{ delay: 0.39 }}
            >
              <p style={{ color: "#fff", textShadow: "1px 1px 6px #000" }}>
                {aboutPara1} <br /> {aboutPara2}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* our product */}
      <motion.section
        ref={productRef}
        id="product"
        className={productStyles.product}
        style={{ color: "#fff" }}
        variants={sectionVariants}
        initial="hidden"
        animate={productInView ? "visible" : "hidden"}
      >
        <div>
          <motion.h1
            style={{ color: "#fff", textShadow: "2px 2px 10px #000" }}
            variants={fadeInUp}
            initial="hidden"
            animate={productInView ? "visible" : "hidden"}
            transition={{ delay: 0.11 }}
          >
            Our Products
          </motion.h1>

          <motion.div
            className={productStyles.cards}
            style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", marginTop: "2.5rem", justifyContent: "center" }}
            initial="hidden"
            animate={productInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.16,
                  delayChildren: 0.22,
                },
              },
            }}
          >
            {fiveProducts.map((product, index) => (
              <motion.div
                className={productStyles.card}
                key={index}
                style={{ color: "#fff" }}
                variants={fadeInUp}
                custom={index * 0.08 + 0.2}
                initial="hidden"
                animate={productInView ? "visible" : "hidden"}
                transition={{ type: "spring", bounce: 0.13, duration: 0.6, delay: 0.25 + index * 0.08 }}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #0003" }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className={productStyles.cardImg}
                  initial={{ rotate: -12, opacity: 0 }}
                  animate={productInView ? { rotate: 0, opacity: 1 } : { rotate: -12, opacity: 0 }}
                  transition={{ delay: 0.25 + index * 0.08, duration: 0.47, type: "spring", bounce: 0.4 }}
                >
                  <img src={product.image} alt="" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={productStyles.button}
            initial={{ opacity: 0, y: 26 }}
            animate={productInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
            transition={{ delay: 0.41, duration: 0.5 }}
          >
            <motion.button
              style={{ color: "#fff", background: "#222" }}
              whileHover={{ scale: 1.06, background: "#333" }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  color: "#fff",
                }}
                to="/shop/listing"
              >
                <motion.div
                  className={productStyles.Arrow1}
                  initial={{ x: -12, opacity: 0 }}
                  animate={productInView ? { x: 0, opacity: 1 } : { x: -12, opacity: 0 }}
                  transition={{ delay: 0.58, duration: 0.32 }}
                >
                  <MoveRight color="#fff" />
                </motion.div>
                View All
                <motion.div
                  className={productStyles.Arrow2}
                  initial={{ x: 12, opacity: 0 }}
                  animate={productInView ? { x: 0, opacity: 1 } : { x: 12, opacity: 0 }}
                  transition={{ delay: 0.68, duration: 0.32 }}
                >
                  <MoveRight color="#fff" />
                </motion.div>
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* contact section */}
      <motion.div
        ref={contactWrapperRef}
        className="w-full h-full bg-[#000]"
        variants={sectionVariants}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        transition={{ delay: 0.09, duration: 0.7, type: "spring", bounce: 0.28 }}
      >
        <motion.section
          id="contact"
          style={{
            background: "#111",
            color: "#fff",
            padding: "48px 0",
            marginTop: "48px",
            borderRadius: "16px",
            boxShadow: "0px 8px 24px rgba(0,0,0,0.14)",
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          variants={fadeInUp}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          transition={{ delay: 0.17 }}
        >
          <motion.div
            style={{
              maxWidth: 500,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              alignItems: "center",
            }}
            variants={fadeIn}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            transition={{ delay: 0.22 }}
          >
            <motion.h2
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                marginBottom: 0,
                letterSpacing: "1px",
                filter: "drop-shadow(2px 4px 20px #111)",
              }}
              variants={fadeIn}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              Contact Us
            </motion.h2>
            <motion.p
              style={{
                color: "#bbb",
                fontSize: "1.05rem",
                margin: 0,
                textAlign: "center",
                maxWidth: 380,
              }}
              variants={fadeIn}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              transition={{ delay: 0.37 }}
            >
              Have a question, suggestion, or need support? Fill out the form below and our team will get back to you shortly.
            </motion.p>
            <motion.form
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
              onSubmit={(e) => {
                e.preventDefault();
                // you can handle form submission here
                alert("Thank you for contacting us! We will respond soon.");
                e.target.reset();
              }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { delayChildren: 0.44, staggerChildren: 0.08 } }
              }}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
            >
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={{
                  background: "#232329",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "13px 18px",
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 1px 4px rgba(30,33,40,0.10)",
                }}
                variants={fadeIn}
                custom={0}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                transition={{ delay: 0.48 }}
                whileFocus={{ boxShadow: "0 2px 8px #6662" }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={{
                  background: "#232329",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "13px 18px",
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 1px 4px rgba(30,33,40,0.10)",
                }}
                variants={fadeIn}
                custom={0.04}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                transition={{ delay: 0.56 }}
                whileFocus={{ boxShadow: "0 2px 8px #6662" }}
              />
              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                style={{
                  background: "#232329",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "13px 18px",
                  fontSize: "1rem",
                  outline: "none",
                  resize: "vertical",
                  boxShadow: "0 1px 4px rgba(30,33,40,0.10)",
                }}
                variants={fadeIn}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                transition={{ delay: 0.66 }}
                whileFocus={{ boxShadow: "0 2px 8px #6662" }}
              />
              <motion.button
                type="submit"
                style={{
                  background: "linear-gradient(90deg, #444 0%, #232329 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px 0",
                  fontWeight: 600,
                  fontSize: "1rem",
                  letterSpacing: "0.5px",
                  cursor: "pointer",
                  transition: "background 0.18s",
                }}
                variants={fadeIn}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                transition={{ delay: 0.74 }}
                whileHover={{ background: "#1a1a1d", scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
            <motion.div
              style={{
                marginTop: "16px",
                color: "#666",
                fontSize: "0.9rem",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ delay: 0.85, duration: 0.5 }}
            >
              Or email us at <a href="mailto:support@thejhankar.com" style={{ color: "#bbb", textDecoration: "underline" }}>support@thejhankar.com</a>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
}
