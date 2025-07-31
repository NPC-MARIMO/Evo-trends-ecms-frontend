import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth:"900px",
        margin: "0 auto",
        color: "#fff",
        backgroundColor: "#0F0F0F",
      }}
    >
      <h1 style={{ color: "#D4AF37", marginBottom: "1rem" }}>Privacy Policy</h1>
      
      <p>
        <strong>Website:</strong> https://www.evo-trends-ecms.vercel.app
      </p>
      <p>
        <strong>Company:</strong> Evo-Trends
      </p>

      <h2 style={{ color: "#6A0DAD" }}>1. Introduction</h2>
      <p>
        At Evo-Trends, we are committed to protecting your privacy. This Privacy
        Policy explains how we collect, use, and handle your personal
        information when you visit our website and purchase products from us. By
        using our services, you agree to the terms of this Privacy Policy.
      </p>

      <h2 style={{ color: "#6A0DAD" }}>2. Information We Collect</h2>
      <ul>
        <li>
          <strong>Customer Details:</strong> Full name, email address, phone
          number, shipping address, and billing information when you place an
          order.
        </li>
        <li>
          <strong>Payment Data:</strong> We process payments securely via
          Razorpay. Your card details are never stored on our servers.
        </li>
        <li>
          <strong>Technical Data:</strong> IP address, browser type, device
          info, and usage data through cookies and analytics.
        </li>
      </ul>

      <h2 style={{ color: "#6A0DAD" }}>3. How We Use Your Information</h2>
      <ul>
        <li>To fulfill your orders and deliver products</li>
        <li>To process payments securely</li>
        <li>To send updates about your order and shipping</li>
        <li>To respond to support requests</li>
        <li>To improve our website and user experience</li>
        <li>To comply with legal and financial obligations</li>
      </ul>

     

      <h2 style={{ color: "#6A0DAD" }}>5. Data Sharing</h2>
      <p>We only share user data with trusted third parties, such as:</p>
      <ul>
        <li>Razorpay (for payment processing)</li>
        <li>Delivery partners (for shipping and logistics)</li>
        <li>Government or legal authorities when required by law</li>
      </ul>

      <h2 style={{ color: "#6A0DAD" }}>6. Cookies</h2>
      <p>
        Evo-Trends uses cookies to store session data, remember your
        preferences, and improve performance. You can disable cookies via your
        browser settings.
      </p>

      <h2 style={{ color: "#6A0DAD" }}>7. Data Retention</h2>
      <p>
        We retain customer information for as long as necessary to complete
        transactions, provide support, and comply with tax or legal obligations.
      </p>

      <h2 style={{ color: "#6A0DAD" }}>8. Security</h2>
      <p>
        We implement security practices including encryption, secure servers,
        and access restrictions to protect your personal data from unauthorized
        access, misuse, or disclosure.
      </p>

      <h2 style={{ color: "#6A0DAD" }}>9. Your Rights</h2>
      <p>
        As a customer, you have the right to access, correct, or delete your
        personal information. To make a request, email us at{" "}
        <a href="mailto:support@evo-trends.com" style={{ color: "#00C897" }}>
          support@evo-trends.com
        </a>
        .
      </p>

      <h2 style={{ color: "#6A0DAD" }}>10. Children’s Privacy</h2>
      <p>
        Evo-Trends does not sell products to children under the age of 13. We do
        not knowingly collect personal data from minors.
      </p>

      <h2 style={{ color: "#6A0DAD" }}>11. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy at any time. Changes will be posted on
        this page with the updated effective date.
      </p>

     
    </div>
  );
};

export default PrivacyPolicy;
