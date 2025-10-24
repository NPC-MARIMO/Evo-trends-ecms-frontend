import React from 'react'
import One from '../../assets/One.png'
import Two from '../../assets/Two.png'
import Three from '../../assets/Two.png'
import Four from '../../assets/Two.png'

export default function Home() {
  return (
    <div>
      <section className="bg-[#fcf8f3] min-h-screen flex items-center justify-center ">
        <div className="flex flex-col md:flex-row items-stretch gap-12  w-full">
          {/* Left: Hero Image */}
          <div className="flex-shrink-0 self-stretch">
            <img
              src={One}
              alt="Elegant woman with jewellery"
              className="w-[370px] md:w-[570px] h-full object-cover scale-x-[-1]"
              style={{ minHeight: "100vh" }}
            />
          </div>
          {/* Right: Hero Content */}
          <div className="flex-1 flex flex-col justify-center md:pl-12 mt-10 md:mt-0">
            <span className="text-[#b69b85] font-medium text-base mb-2 md:mb-3">
              Elevate Your Elegance
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#3e3228] mb-4 leading-tight">
              <span className="font-bold italic text-[#343332]">Uncover the</span>
            </h1>
            <p className="text-[#665d56] text-lg md:text-xl mb-6 max-w-xl leading-relaxed">
              Discover the Extraordinary: Jewellery that Captivates the Senses. Crafted with Passion, Designed for the Discerning
            </p>
            <button className="bg-[#b38a69] hover:bg-[#9c7659] text-white px-8 py-3 rounded font-semibold shadow-md w-fit transition-colors duration-200 mb-8">
              Explore Now
            </button>
            <span className="text-[#847567] text-sm md:text-base tracking-wide">
              Embrace the Exceptional: Unlock a World of Luxurious
            </span>
          </div>
          {/* Optionally add decorative leaf graphics on the right for more fidelity */}
        </div>
      </section>
      <section className="bg-[#464f38] py-16 px-2 md:px-0 flex justify-center">
        <div className="flex flex-row w-full max-w-7xl items-center justify-between gap-7 md:gap-10">
          {/* Leftmost vertical logo */}
          <div className="flex flex-col items-center w-20">
            <div className="bg-[#454c35] rounded-lg flex flex-col items-center justify-center w-16 h-32">
              <img
                src="https://i.imgur.com/bj5P09t.png"
                alt="Vertical Logo"
                className="w-10 h-20 object-contain"
                style={{ marginBottom: "0.25rem" }}
              />
              <span className="mt-2 text-xs text-[#b9c1ac] tracking-widest">JEWELS</span>
            </div>
          </div>
          {/* Grid of features */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            <div className="flex flex-col items-center">
              <span className="mb-2">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#eaddc1" strokeWidth="1.8"><rect x="4" y="6" width="16" height="12" rx="2" stroke="#eaddc1" strokeWidth="1.6" /><path d="M4 10h16" stroke="#eaddc1" strokeWidth="1.6" /><rect x="9" y="13" width="6" height="1.5" rx=".6" fill="#eaddc1" /></svg>
              </span>
              <span className="font-semibold text-[#ede8da] text-lg">Reach Out</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-2">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#eaddc1" strokeWidth="1.7"><circle cx="12" cy="12" r="9" stroke="#eaddc1" strokeWidth="1.6"/><path d="M12 12l2.5-4.5" stroke="#eaddc1" strokeWidth="1.6" strokeLinecap="round"/><circle cx="12" cy="15.5" r="1.5" fill="#eaddc1" /></svg>
              </span>
              <span className="font-semibold text-[#ede8da] text-lg">Connect For</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-2">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#eaddc1" strokeWidth="1.6"><circle cx="12" cy="12" r="9" stroke="#eaddc1" strokeWidth="1.6"/><path d="M12 7v5l3 3" stroke="#eaddc1" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </span>
              <span className="font-semibold text-[#ede8da] text-lg text-center">Discover the Art<br className="hidden md:block" />of Personalisation</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-2">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#eaddc1" strokeWidth="1.7"><path d="M17 8.5a5 5 0 1 1-10 0M12 15.5V6" stroke="#eaddc1" strokeWidth="1.6" strokeLinecap="round" /><path d="M12 15.5l3.2 3.2m-3.2-3.2l-3.2 3.2" stroke="#eaddc1" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </span>
              <span className="font-semibold text-[#ede8da] text-lg">Elevate Your</span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center min-h-screen items-center py-24 bg-white">
        <div className="flex flex-col md:flex-row gap-16 items-center max-w-6xl w-full">
          <div className="flex-shrink-0">
            <img
              src={One}
              alt="Elegant woman wearing jewellery"
              className="bg-[#c5c2c2] object-cover shadow-md w-[400px] h-[470px] md:w-[440px] md:h-[520px]"
            />
          </div>
          <div className="flex-1 px-4">
            <h1 className="text-5xl md:text-6xl font-semibold text-[#343332] mb-6">
              <span className="italic font-bold">Timeless </span> <br />
              <span className="italic">Elegance</span>
            </h1>
            <p className="text-[#79787a] text-lg md:text-xl mt-10 mb-10 max-w-xl leading-relaxed">
              Discover the Extraordinary: Our Jewellery Collection Transcends Time, Embodying the Essence of Luxury and Refinement. Elevate your style with pieces that captivate the senses and make a lasting impression.
            </p>
            <button className="bg-[#7d5a39]  text-white px-10 py-4 text-lg shadow-lg font-semibold hover:bg-[#694b2e] transition-all duration-200">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-16 items-center max-w-6xl">
          <div className="flex-1 px-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#2c2926] mb-6">
              Uncover <span className="italic font-bold text-[#7d5a39]">Unique Designs</span>
            </h2>
            <p className="text-[#79787a] text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              From everyday elegance to statement pieces — find jewellery that fits every moment. Crafted with precision, made to inspire.
            </p>
            <button className="bg-[#343332] text-white px-8 py-3 text-lg font-semibold hover:bg-[#222] transition-all duration-200">
              Explore Collection
            </button>
          </div>
          <div className="flex-shrink-0">
            <div className="w-[340px] h-[420px] bg-[#e6e1db] flex items-center justify-center shadow-lg">
              {/* Placeholder for a product image, you may change src */}
              <img
                src={Two}
                alt="Jewellery Design"
                className="object-cover shadow w-[340px] h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#fcfaf6]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#2c2926] mb-2 font-serif">
              Curated Perfection
            </h2>
            <p className="text-[#7d5a39] mt-2 text-base md:text-lg font-light">
              Elevate Your Look with Our Exclusive Jewellery Designs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-start">
            <div className="flex flex-col items-center">
              <div className="w-[330px] h-[385px] bg-[#ebe9e5] flex items-center justify-center shadow-lg mb-5">
                <img
                  src={Three} // Replace with your actual image import
                  alt="Radiant Elegance - Timeless Allure"
                  className="object-cover w-[330px] h-[385px]"
                />
              </div>
              <span className="mt-2 font-semibold text-[#45413d] text-lg block">
                Radiant Elegance
              </span>
              <span className="text-[#7d5a39] font-light italic text-base">
                Timeless Allure
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[330px] h-[385px] bg-[#ebe9e5] flex items-center justify-center shadow-lg mb-5">
                <img
                  src={Four} // Replace with your actual image import
                  alt="Captivating Style - Refined"
                  className="object-cover w-[330px] h-[385px]"
                />
              </div>
              <span className="mt-2 font-semibold text-[#45413d] text-lg block">
                Captivating Style
              </span>
              <span className="text-[#7d5a39] font-light italic text-base">
                Refined
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#fcfaf6]">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2c2926] mb-2 font-serif">
            Curated Perfection
          </h2>
          <p className="text-[#7d5a39] mt-2 text-base md:text-lg font-light">
            Elevate Your Style
          </p>
          <div className="mt-12 w-full flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Left: Elegant woman portrait */}
            <div className="w-full md:w-1/3 flex-shrink-0 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=500&h=600&q=80"
                alt="Elegant woman wearing jewellery"
                className="object-cover rounded-lg shadow-lg w-[320px] h-[360px]"
                style={{ background: "#ede9e5" }}
              />
            </div>
            {/* Right: Two jewelry product images */}
            <div className="w-full md:w-2/3 flex items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=220&q=80"
                  alt="Gold necklace with green jewel"
                  className="object-cover rounded-lg shadow-md w-[170px] h-[250px] bg-[#f8f7f2]"
                />
              </div>
              <div className="flex flex-col items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=220&q=80"
                  alt="Pear drop gold necklace"
                  className="object-cover rounded-lg shadow-md w-[170px] h-[250px] bg-[#f8f7f2]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
