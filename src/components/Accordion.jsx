import Accordian from "../accordian.jsx";

const Accordion = () => {
     const accordCards = [
     {
     title: "Who’s eligible for the Card? ",
     text: "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low.",
     },
     {
     title: "Is my location serviceable?",
     text: "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low.",
     },
     {
     title: "What if I don’t want to pay at all?",
     text: "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low.",
     },
     {
     title: "What happens after I’ve build my card?",
     text: "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low.",
     },
];
     return (
          <>
          <div className="accordian-section px-[48px] sm:px-[316px] py-[48px] sm:py-[80px]">
               <h6 className="text-[#000000] font-medium text-[24px] sm:text-[52px] leading-[32px] text-center">
                    FAQs
               </h6>
               <div className="mt-[32px]">
                    {accordCards.map(({ text, title }, index) => (
                    <Accordian key={index} title={title} text={text} index={index} />
                    ))}
               </div>
          </div>
          </>
  )
};

export default Accordion;
