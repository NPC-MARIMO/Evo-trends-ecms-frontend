import React from "react";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        At The Jhankaar, we are committed to protecting your privacy. This Privacy
        Policy explains how we collect, use, and handle your personal
        information when you visit our website and purchase products from us. By
        using our services, you agree to the terms of this Privacy Policy.
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <ul className="list-inside list-disc space-y-1 md:space-y-2 pl-4 md:pl-6 text-neutral-300">
        <li>
          <span className="font-medium text-neutral-100">Customer Details:</span> Full name, email address, phone
          number, shipping address, and billing information when you place an
          order.
        </li>
        <li>
          <span className="font-medium text-neutral-100">Payment Data:</span> We process payments securely via
          Razorpay. Your card details are never stored on our servers.
        </li>
        <li>
          <span className="font-medium text-neutral-100">Technical Data:</span> IP address, browser type, device
          info, and usage data through cookies and analytics.
        </li>
      </ul>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <ul className="list-inside list-disc space-y-1 md:space-y-2 pl-4 md:pl-6 text-neutral-300">
        <li>To fulfill your orders and deliver products</li>
        <li>To process payments securely</li>
        <li>To send updates about your order and shipping</li>
        <li>To respond to support requests</li>
        <li>To improve our website and user experience</li>
        <li>To comply with legal and financial obligations</li>
      </ul>
    ),
  },
  {
    title: "5. Data Sharing",
    content: (
      <>
        <p className="mb-1 text-neutral-300">We only share user data with trusted third parties, such as:</p>
        <ul className="list-inside list-disc space-y-1 md:space-y-2 pl-4 md:pl-6 text-neutral-300">
          <li>Razorpay (for payment processing)</li>
          <li>Delivery partners (for shipping and logistics)</li>
          <li>Government or legal authorities when required by law</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Cookies",
    content: (
      <>
        The Jhankaar uses cookies to store session data, remember your
        preferences, and improve performance. You can disable cookies via your
        browser settings.
      </>
    ),
  },
  {
    title: "7. Data Retention",
    content: (
      <>
        We retain customer information for as long as necessary to complete
        transactions, provide support, and comply with tax or legal obligations.
      </>
    ),
  },
  {
    title: "8. Security",
    content: (
      <>
        We implement security practices including encryption, secure servers,
        and access restrictions to protect your personal data from unauthorized
        access, misuse, or disclosure.
      </>
    ),
  },
  {
    title: "9. Your Rights",
    content: (
      <>
        As a customer, you have the right to access, correct, or delete your
        personal information. To make a request, email us at{" "}
        <a
          href="mailto:support@The Jhankaar.com"
          className="text-primary-gold hover:underline"
        >
          support@The Jhankaar.com
        </a>
        .
      </>
    ),
  },
  {
    title: "10. Children’s Privacy",
    content: (
      <>
        The Jhankaar does not sell products to children under the age of 13. We do
        not knowingly collect personal data from minors.
      </>
    ),
  },
  {
    title: "11. Changes to this Policy",
    content: (
      <>
        We may update this Privacy Policy at any time. Changes will be posted on
        this page with the updated effective date.
      </>
    ),
  },
];

const PrivacyPolicy = () => {
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
        <div className="pointer-events-none absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 blur-3xl opacity-30"
          aria-hidden
        >
          <div className="w-[600px] h-[120px] bg-gradient-to-r from-[#d4af37] via-[#6a0dad] to-[#d4af37] rounded-full"></div>
        </div>

        {/* Header & Company Info */}
        <header className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#d4af37] tracking-tight mb-2 text-center drop-shadow">
            Privacy Policy
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
              <span className="font-semibold text-neutral-200">Company:</span>{" "}
              The Jhankaar
            </div>
          </div>
        </header>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map(({ title, content }, idx) => (
            <section key={title}>
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#a993f7] tracking-wide">
                {title}
              </h2>
              <div className="text-base text-neutral-300 leading-relaxed">
                {content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
