import rightArrow from "./../assets/rightArrow.svg";

const GetStarted = () => {
     return (
          <>
               <div className="second-section bg-[#8E7CB5] px-[24px] pt-[32px] pb-[48px] sm:px-[108px] sm:py-[108px] flex flex-col sm:flex-row gap-x-[100px] sm:items:center">
               <p data-aos="fade-down" className="font-medium text-2xl sm:text-[40px] leading-[36px] sm:leading-[56px] text-[#ffffff] w-full sm:w-3/6">
                    {" "}
                    The Freedom to Create The Credit Card You Want
               </p>
               <div className="mt-4 sm:mt-0 sm:hidden">
                    <p className="font-normal text-base leading-6 text-[#ffffff]">
                    {" "}
                    Build your own Credit Card that fits in your day to day lifestyle.
                    First, choose your rewards and then select your card design.
                    </p>
                    <p className="mt-6 sm:mt-0 text-[#ffffff] font-normal text-sm	leading-[21px]">
                    Check if the card is available in your city
                    </p>
                    <div className="flex gap-x-4 mt-[8px]">
                    <select
                    className="w-[calc(85%_-_16px)] bg-[#FFFFFF] rounded-[21px] px-[16px] py-[8px] text-base font-normal leading=[24px] text-[#000000]"
                    name="city"
                    id="cars"
                    >
                    <option value="selectCity">Select City</option>
                    <option value="saab">mumbai</option>
                    </select>
                    <button className="w-[15%] bg-[#4E3F6B] rounded-[21px] px-[16px] py=[8px] text-base font-medium leading-[24px] text-[#FFFFFF]">
                    Go
                    </button>
                    </div>
               </div>
               <div id="second-text" className="hidden sm:block">
                    <p className="text-base font-normal leading-[24px] text-[#FFFFFF]">
                    That&apos;s why it comes with benefits & rewards chosen by you. Available
                    in multiple designs, your card comes in a style selected by you. You
                    can come back each year, to edit your benefits or update your style.
                    </p>
                    <p className="mt-[16px] text-base font-normal leading-[24px] text-[#FFFFFF]">
                    Your OneSync Credit Card stays true to you, year after year. It&apos;s
                    the only card you&apos;ll ever need.
                    </p>

                    <div className="flex gap-x-[16px] text-[#FFFFFF] text-[20px] leading-[30px] font-medium mt-[16px]">
                    <a className="underline" href="#!">
                    Get Started
                    </a>
                    <img src={rightArrow} />
                    </div>
               </div>
               </div>
          </>
  )
};

export default GetStarted;
