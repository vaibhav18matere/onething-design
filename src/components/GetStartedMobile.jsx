import rightArrow from './../assets/rightArrow.svg';

const GetStartedMobile = () => {
     return (
          <>
               <div className="section-5-mobile-only pt-[32px] pb-[48px] px-[24px] bg-[#7C7EB5] flex flex-col gap-y-[16px] text-[#FFFFFF] sm:hidden">
                    <h6 className="font-medium text-[24px] leading-[33.6px]">
                         Why the OneSync Card is the Best Choice for you?
                    </h6>
                    <p className="font-normal text-[18px] leading-[27px]">
                         You can create a Credit Card that fits all your needs on your own.
                         Gone are the days when you had choose from premade credit cards with
                         features that you did not need.{" "}
                    </p>
                    <p className="font-normal text-[18px] leading-[27px]">
                         With the OneSync card you can save on all the things that you love to
                         do with a unique personal touch
                    </p>
                    <div className="flex gap-x-[6px] text-[#FFFFFF] text-base leading-[24px] font-medium">
                         <a className="underline" href="#!">
                         Get Started
                         </a>
                         <img src={rightArrow} />
                    </div>
               </div>
          </>
  )
};

export default GetStartedMobile;
