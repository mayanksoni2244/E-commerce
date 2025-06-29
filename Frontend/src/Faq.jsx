import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 7 days of delivery if it's unused and in original packaging. To initiate a return, go to your orders section and follow the steps.",
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3–5 business days. Expedited options are available at checkout and typically arrive within 1–2 business days.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide. Shipping fees and delivery times vary based on your location. You’ll see estimates during checkout.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, we’ll send a tracking link to your registered email or mobile number. You can also check the status in your account's 'My Orders' section.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, UPI, PayPal, and Net Banking. All payments are processed securely through encrypted gateways.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 bg-gray-300">
      <h1 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-4 transition-all duration-300 border border-gray-200"
          >
            <button
              className="w-full flex justify-between items-center text-left font-medium text-gray-800 text-lg"
              onClick={() => toggleFaq(index)}
            >
              {item.question}
              {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-96 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
