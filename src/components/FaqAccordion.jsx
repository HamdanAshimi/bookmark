import { useState } from "react";

export default function FaqAccordion() {
  const [activeTab, setActiveTab] = useState(null);

  const faqs = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
    },
  ];

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <section id="faq-accordion">
      {/* Main Container */}
      <div className="container mx-auto mb-32 px-6">
        {/* Accordion Container */}
        <div className="m-8 mx-auto max-w-2xl overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-b py-1 outline-none">
              {/* Tab Flex Container */}
              <button
                onClick={() => toggleTab(index)}
                className="flex w-full cursor-pointer items-center justify-between py-3 text-left text-gray-500 transition duration-500 ease hover:text-red-500"
              >
                {/* Tab Title */}
                <div>{faq.question}</div>

                {/* Arrow */}
                <div
                  className={`transition duration-500 ease ${
                    activeTab === index ? "-rotate-180 text-red-500" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </button>

              {/* Tab Inner Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease ${
                  activeTab === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="py-2 text-justify text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
