export const ACCORDION_CODE = `import React from 'react';
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const Accordion = () => {
  const items = [
    {
      question: "What is your return policy?",
      answer: "Our return policy allows for returns within 30 days of purchase, provided the item is in its original condition with tags attached."
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order by logging into your account and visiting the 'Order History' section. A tracking number will be provided once your order ships."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary based on the destination."
    },
    {
      question: "How can I contact customer support?",
      answer: "Our customer support team is available via email at support@example.com or by phone at (123) 456-7890 during business hours."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-zinc-950 text-zinc-300 p-8">
      <div className="w-full max-w-2xl bg-zinc-900/50 rounded-xl border border-zinc-800">
        {items.map((item, index) => (
          <div key={index} className="border-b border-zinc-800 last:border-b-0">
            <button
              className="flex justify-between items-center w-full p-6 text-lg font-medium text-left text-white hover:bg-zinc-800/50 transition-colors duration-200"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              {activeIndex === index ? (
                <Minus className="w-5 h-5 text-zinc-400" />
              ) : (
                <Plus className="w-5 h-5 text-zinc-400" />
              )}
            </button>
            <div
              className={\`overflow-hidden transition-all duration-300 ease-in-out \${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }\`}
            >
              <div className="p-6 pt-0 text-zinc-400">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;`;
