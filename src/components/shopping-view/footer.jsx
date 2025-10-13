import React from "react";

export default function ShoppingFooter() {
  return (
    <footer className="w-full bg-[#101010] border-t border-neutral-800 px-4 py-6 flex flex-col items-center">
      <div className="flex flex-row gap-6 mb-2">
        <a
          href="/"
          className="text-neutral-300 hover:text-white text-sm transition-colors"
        >
          Home
        </a>
        <a
          href="/shop/tracking"
          className="text-neutral-300 hover:text-white text-sm transition-colors"
        >
          Track Order
        </a>
        <a
          href="/terms-and-conditions"
          className="text-neutral-300 hover:text-white text-sm transition-colors"
        >
          Terms
        </a>
        <a
          href="/privacy-policy"
          className="text-neutral-300 hover:text-white text-sm transition-colors"
        >
          Privacy
        </a>
      </div>
      <p className="text-xs text-neutral-500 tracking-wide">
        &copy; {new Date().getFullYear()} Zenstore. Minimal. Modern. Hassle-free.
      </p>
    </footer>
  );
}
