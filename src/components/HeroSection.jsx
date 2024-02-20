import creditCard from "./../assets/creditCard.svg";

const HeroSection = () => {
     return (
          <>
               <div className="flex flex-col sm:flex-row justify-center items-center w-full h-[calc(100%_-_64px)] sm:h-[calc(100%_-_104px)] px-[18px] sm:px-[108px] py-[24px] sm:py-0 gap-y-[24px] sm:gap-x-[128px]">
                    <div className="flex flex-col text-center sm:text-left w-100 sm:w-6/12 h-half">
                         <p className="text-[32px] sm:text-5xl text-[#000000] leading-[44.8px] sm:leading-[62.4px] font-medium">
                         Build a Credit Card That is Definitely Yours
                         </p>
                         <p className="mt-4 text-[#000000] text-xl leading-[30px] font-normal">
                         {" "}
                         With the OneSync Credit Card you can customise your card the way
                         you want
                         </p>
                         <button className="mx-auto sm:mx-0 w-[160px] h-[40px] sm:w-[172px] sm:h-[43px] mt-6 bg-[#F2707C] text-[#FFFFFF] flex items-center justify-center rounded-[30px] leading-6 sm:leading-[27px] text-base sm:text-lg  font-medium">
                         Get Started
                         </button>
                    </div>
                    <div data-aos="flip-right" className="w-100 sm:w-6/12 h-half">
                         <img className="w-100  h-[240px] sm:h-full" src={creditCard} />
                    </div>
               </div>
          </>
  )
};

export default HeroSection;
