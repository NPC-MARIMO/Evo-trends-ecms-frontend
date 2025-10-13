import React from "react";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <>
        By accessing or using the The Jhankaar website{" "}
        <a
          href="https://www.The Jhankaar-ecms.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-gold hover:underline transition"
        >
          (https://www.The Jhankaar-ecms.vercel.app)
        </a>
        , you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use our site.
      </>
    ),
  },
  {
    title: "2. Use of the Website",
    content: (
      <>
        You agree to use this website only for lawful purposes. You may not use this site to distribute harmful content, attempt unauthorized access, or engage in fraudulent activities.
      </>
    ),
  },
  {
    title: "3. Product Information",
    content: (
      <>
        All product details, images, pricing, and availability are subject to change at any time without notice. We strive for accuracy, but we do not guarantee that all product descriptions or content are always error-free.
      </>
    ),
  },
  {
    title: "4. Orders & Payments",
    content: (
      <ul className="list-inside list-disc space-y-1 pl-5 text-neutral-300">
        <li>All payments are processed securely via Razorpay.</li>
        <li>
          We reserve the right to cancel any order for any reason, including stock issues or suspicious activity.
        </li>
        <li>
          Once an order is placed, it cannot be modified. For cancellation, contact us immediately.
        </li>
      </ul>
    ),
  },
  {
    title: "5. Shipping & Delivery",
    content: (
      <>
        Orders are processed and shipped as per the estimated delivery time. Delays may occur due to logistics or unforeseen circumstances.
      </>
    ),
  },
  {
    title: "6. Returns & Refunds",
    content: (
      <>
        We accept return requests within <span className="italic text-neutral-200">[X days]</span> of delivery if the item is damaged or incorrect. Refunds will be processed only after the returned item is received and inspected. Refunds are made through the original payment method, minus shipping charges (if applicable).
      </>
    ),
  },
  {
    title: "7. Intellectual Property",
    content: (
      <>
        All content on this site — including logos, product names, images, text, and code — is the property of The Jhankaar and protected by copyright and trademark laws. Unauthorized use is strictly prohibited.
      </>
    ),
  },
  {
    title: "8. Limitation of Liability",
    content: (
      <>
        The Jhankaar shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website or products.
      </>
    ),
  },
  {
    title: "9. Governing Law",
    content: (
      <>
        These Terms are governed by the laws of India. Any disputes arising will be handled in the courts located in <span className="italic text-neutral-200">[Your City/State]</span>.
      </>
    ),
  },
  {
    title: "10. Modifications to Terms",
    content: (
      <>
        We reserve the right to update or change these Terms at any time. Continued use of the site after such changes constitutes acceptance of the new terms.
      </>
    ),
  },
];

const TermsAndConditions = () => {
  return (
    <section className="min-h-[80vh] py-8 px-4 md:px-8 flex justify-center bg-[#0F0F0F] relative overflow-hidden z-0">
      <div
        className="
          relative
          shadow-xl shadow-[#1111]/10
          backdrop-blur
          w-full max-w-3xl
          rounded-2xl
          bg-gradient-to-br from-[#111827]/90 to-[#18181b]/95
          border border-neutral-800
          px-5 py-8 md:px-12 md:py-12
          mx-auto z-10
        "
      >
        {/* Accent backdrop (Glow) */}
        <div className="pointer-events-none absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 blur-3xl opacity-30" aria-hidden>
          <div className="w-[600px] h-[120px] bg-gradient-to-r from-[#d4af37] via-[#6a0dad] to-[#d4af37] rounded-full"></div>
        </div>
        {/* Header */}
        <header className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#d4af37] tracking-tight mb-2 text-center drop-shadow">
            Terms &amp; Conditions
          </h1>
          <div className="space-y-0.5 text-sm text-neutral-400 text-center">
            <div>
              <span className="font-semibold text-neutral-200">Website:</span>{" "}
              <a
                href="https://www.The Jhankaar-ecms.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary-gold"
              >
                https://www.The Jhankaar-ecms.vercel.app
              </a>
            </div>
            <div>
              <span className="font-semibold text-neutral-200">Company:</span> The Jhankaar
            </div>
          </div>
        </header>
        {/* Sections */}
        <div className="space-y-8">
          {SECTIONS.map((section, idx) => (
            <div key={section.title} className="group transition-all">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6A0DAD] mb-2 tracking-tight group-hover:text-[#d4af37] transition-colors">
                {section.title}
              </h2>
              <div className="text-base md:text-lg text-neutral-300 leading-relaxed space-y-2">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
