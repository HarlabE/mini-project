import React, { useState } from 'react';

function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question: 'How much will my delivery cost?',
      answer: 'Pricing for delivery depends on the courier service used for a particular delivery. Some services will charge according to the weight of the packages being delivered, while some others will charge according to the distance between pickup and delivery locations. You can use our free online delivery calculator to estimate the cost of your deliveries.',
      open: false
    },
    {
      question: 'How does SAG Logistics work?',
      answer: 'SAG Logistics is a delivery aggregator. We partner with multiple local and international couriers. When you make a request, SAG Logistics sends the information directly to the delivery partner of your choice, who executes the delivery within the agreed timeline',
      open: false
    },
    {
      question: 'Do I get a refund if my package is not delivered?',
      answer: "With SAG Logistics, you always stay in control of your deliveries. You're always guaranteed a refund if your delivery is not completed. Once a delivery is arranged, you have the option to cancel until the package is picked up. Upon cancellation of any delivery, funds are immediately reversed to your wallet and can be applied towards other deliveries.",
      open: false
    },
    {
      question: 'How do I get lower delivery rates?',
      answer: "You don't have to do anything to get lower delivery rates on SAG Logistics. Our delivery rates are automatically cheaper across the board. Sign up for free and start shipping to enjoy these lower rates.",
      open: false
    },
    {
      question: 'How can I arrange a delivery?',
      answer: 'To arrange a delivery, click book now and enter your shipping details. An account would be automatically setup for you. Enter your delivery address and further details on the items in your package, your order will be generated, and other details will be completed via email.',
      
      open: false
    }
  ]);

  const toggleFAQ = (index) => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) faq.open = !faq.open;
      return faq;
    }));
  };

  return (
    <div className="faq  faq-section">
        <div className='faq-text text-center'>
      <h1>Frequently Asked Questions</h1>
      <p>Get answers to commonly asked questions about SAG Logistics, our services and others.</p>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item faq-items">
          <div className="faq-question faq-questions" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </div>
          {faq.open && <div className="faq-answer faq-answers">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default Faq;