import heroStyles from "./hero.module.css";
import aboutStyles from "./about.module.css";
import productStyles from "./product.module.css";
import { Link } from "react-router-dom";
import { MoveRight, ShoppingCart } from "lucide-react";

import { AboutLeft, Five, Four, HomeHeroBg, One, Three, Two } from "../../assets/index";

export default function Home() {
  let aboutPara1 =
    "At Jhaankar, everypiece is handcrafted with passion, blending timeless artistry and modern elegance. We source our materials ethetically and work only with certified suppliers, ensuring every is as responsible as it is beautiful.";
  let aboutPara2 =
    "Experienced personalised services, unique designes, and a legacy of trust - making every purchase a celebration of style and intefrity.";

  let domain = "www.thejhaankar.com";

  const fiveProducts = [
    {
      image: One,
      name: "",
      price: "",
      description: "",
    },
    {
      image: Two,
      name: "",
      price: "",
      description: "",
    },
    {
      image: Three,
      name: "",
      price: "",
      description: "",
    },
    {
      image: Four,
      name: "",
      price: "",
      description: "",
    },
    {
      image: Five,
      name: "",
      price: "",
      description: "",
    },
  ];

  return (
    <div style={{ color: "#fff" }}>
      {/*  hero setion */}
      <section
        id="hero"
        className={heroStyles.hero}
        style={{ color: "#fff", position: 'relative' }} // enforce white by default in section
      >
        <img src={HomeHeroBg} alt="" />

        <h1
          className={heroStyles.heroText1}
          style={{ color: "#fff", textShadow: "2px 2px 10px #000" }}
        >
          The
        </h1>
        <h1
          className={heroStyles.heroText2}
          style={{ color: "#fff", textShadow: "2px 2px 10px #000" }}
        >
          झंकार
        </h1>

        <div className={heroStyles.cart}>
          <ShoppingCart color="#fff" />
        </div>

        <span
          className={heroStyles.domain}
          style={{ color: "#fff", textShadow: "1px 1px 4px #000" }}
        >
          {" "}
          {domain}
        </span>
      </section>

      {/* about section */}
      <section
        id="about"
        className={aboutStyles.about}
        style={{ color: "#fff", background: "none" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={aboutStyles.aboutImg}>
            <img className={aboutStyles.aboutImage} src={AboutLeft} alt="" />
          </div>
          <div
            className={aboutStyles.aboutText}
            style={{ paddingLeft: "2rem", color: "#fff" }}
          >
            <div>
              <h1 style={{ color: "#fff" }}>Why </h1>{" "}
              <h1
                className={aboutStyles.jhankar}
                style={{
                  marginLeft: "14rem",
                  color: "#eee",
                  textShadow: "2px 2px 7px #000",
                  fontWeight: 700,
                }}
              >
                {" "}
                झंकार&nbsp;?
              </h1>
            </div>
            <div>
              <p style={{ color: "#fff", textShadow: "1px 1px 6px #000" }}>
                {aboutPara1} <br /> {aboutPara2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* our product */}
      <section
        id="product"
        className={productStyles.product}
        style={{ color: "#fff" }}
      >
        <div>
          <h1 style={{ color: "#fff", textShadow: "2px 2px 10px #000" }}>
            Our Products
          </h1>

          <div className={productStyles.cards}>
            {fiveProducts.map((product, index) => (
              <div
                className={productStyles.card}
                key={index}
                style={{ color: "#fff" }}
              >
                <div className={productStyles.cardImg}>
                  <img src={product.image} alt="" />
                </div>
              </div>
            ))}
          </div>

          <div className={productStyles.button}>
            <button style={{ color: "#fff", background: "#222" }}>
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
                <div className={productStyles.Arrow1}>
                  <MoveRight color="#fff" />
                </div>
                View All
                <div className={productStyles.Arrow2}>
                  <MoveRight color="#fff" />
                </div>
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
