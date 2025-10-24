import React from "react";

export default function ShoppingFooter() {
  return (
    <footer className="w-full bg-[#e2c7b7] px-8 py-10 flex flex-row justify-between items-start text-neutral-500 text-[13px]">
      {/* Left: Logo and copyright */}
      <div className="flex flex-col items-center min-w-[140px]">
        {/* Simple "tree" svg icon */}
        <div className="mb-6">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 4L6 20h6v4h8v-4h6L16 4z"
              fill="#181818"
            />
          </svg>
        </div>
        <div className="text-[12px] text-neutral-600 text-center leading-tight">
          &copy; {new Date().getFullYear()} Plantbase, Inc.<br />
          All rights reserved.
        </div>
      </div>
      {/* Center: Quick Links and Explore columns */}
      <div className="flex flex-1 justify-center gap-20">
        {/* Quick Links */}
        <div>
          <div className="mb-2 font-semibold tracking-wider text-[13px] text-neutral-600">quick links</div>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-neutral-800 transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-neutral-800 transition-colors">About</a>
            </li>
            <li>
              <a href="/services" className="hover:text-neutral-800 transition-colors">Services</a>
            </li>
            <li>
              <a href="/products" className="hover:text-neutral-800 transition-colors">Products</a>
            </li>
          </ul>
        </div>
        {/* Explore Our Collection */}
        <div>
          <div className="mb-2 font-semibold tracking-wider text-[13px] text-neutral-600">explore our collection</div>
          <ul className="space-y-1">
            <li>
              <a href="/necklaces" className="hover:text-neutral-800 transition-colors">Necklaces</a>
            </li>
            <li>
              <a href="/earrings" className="hover:text-neutral-800 transition-colors">Earrings</a>
            </li>
            <li>
              <a href="/bracelets" className="hover:text-neutral-800 transition-colors">Bracelets</a>
            </li>
            <li>
              <a href="/rings" className="hover:text-neutral-800 transition-colors">Rings</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Right: Connect with us */}
      <div>
        <div className="mb-2 font-semibold tracking-wider text-[13px] text-neutral-600">connect with us</div>
        <ul className="space-y-1">
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800 transition-colors">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800 transition-colors">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800 transition-colors">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800 transition-colors">
              Pinterest
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
