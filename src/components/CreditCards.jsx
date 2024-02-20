import rightArrBlack from "./../assets/chevron-right-black.svg";
import styleIcon from "./../assets/style.svg";
import card1 from "./../assets/card1.svg";
import card2 from "./../assets/card2.svg";
import card3 from "./../assets/card3.svg";
import card4 from "./../assets/card4.svg";
import BankCarousal from "./../bankCarousal";

const CreditCards = () => {
     return (
          <>
               <div className="section-credit-card flex flex-col sm:flex-row pb-[48px] pl-[24px] pr-[24px] sm:py-[70px] pl-[212px] pr-[109px] sm:bg-[#F7F3FF]">
                    <div className="w-full sm:w-6/12 bg-[#F7F3FF] sm:bg-[transparent] px-[45px] py-[40px] sm:py-[0] flex flex-col gap-y-[36.54px] sm:gap-y-[56.29px] justify-center items-center">
                    {/* <img className="w-fit h-fit sm:w-[w-max] sm:h-[w-max]" src={bankCard} /> */}
                    <BankCarousal />
                    <div className="flex gap-x-[23.1px] items-center justify-center">
                         <img className="w-[44px] h-[28px]" src={card1} />
                         <img
                         className="w-[44px] h-[28px]"
                         src={card2}
                         href="#carousel__slide2"
                         />
                         <img className="w-[44px] h-[28px]" src={card3} />
                         <img className="w-[44px] h-[28px]" src={card4} />
                    </div>
                    </div>
                    <div className="flex-col gap-y-[16px] w-6/12 desktop pl-[128px] pr-[109px] hidden sm:flex">
                         <img className="w-[64px] h-[64px]" src={styleIcon} />
                    <h6 className="font-medium text-[40px] leading-[60px] text-[#000000]">
                         Select Your Style
                    </h6>
                    <p className="font-normal text-[24px] leading-[36px] text-[#000000]">
                         Match your card to your personality. Whether you like a minimal look
                         or something that catches everyone&apos;s eyes, we&apos;ve got a style for
                         you. You can update your style every year, for a small fee{" "}
                    </p>
                    </div>
                    <div className="flex flex-col mt-[16px] gap-y-[16px] w-full mobile sm:hidden">
                    <h6 className="font-medium text-[18px] leading-[21.09px] text-[#000000]">
                         Select Your Style
                    </h6>
                    <p className="font-normal text-base leading-[24px] text-[#000000]">
                         Whether you like a minimal look or something that catches everyone&apos;s
                         eyes. We have a Card design for you
                    </p>
                    <div className="mt-[16px] flex gap-x-[6px] items-center">
                         <a
                         href="#"
                         className="underline font-medium text-base leading-[24px] text-[#000000]"
                         >
                         Get Started
                         </a>
                         <img src={rightArrBlack} />
                    </div>
                    </div>
               </div>
          </>
  )
};

export default CreditCards;
