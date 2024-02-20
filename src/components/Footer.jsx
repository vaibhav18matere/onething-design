const Footer = () => {
     return (
          <>
               <footer className="bg-[#12193B] flex flex-col text-center items-center px-[31px] sm:px-[108px] pt-[56px] pb-[80px]">
               <h6 className="font-medium text-[32px] leading-[40px] text-[#FFFFFF]">
                    OneSync Credit Card
               </h6>
               <p className="font-normal text-[20px] leading-[32px] text-[#FFFFFF]">
                    Experience Freedom
               </p>
               <button className="mt-[48px] bg-[#7C7EB5] rounded-[46px] w-[172px] h-[43px] flex items-center justify-center text-[#FFFFFF]">
                    Get Started
               </button>
               <hr className="w-full my-[65px]" />
               <div className="flex gap-x-[170px] text-[#FFFFFF] font-medium text-base leading-[24px] w-full">
                    <ul className="text-left">
                    <li>Manage Your Card</li>
                    <li className="mt-[24px]">Track Your Application</li>
                    <li className="mt-[24px]">Contact Us</li>
                    </ul>
                    <ul className="hidden sm:inline-block">
                    <li>Manage Your Card</li>
                    <li className="mt-[24px]">Track Your Application</li>
                    <li className="mt-[24px]">Contact Us</li>
                    </ul>
                    <ul className="hidden sm:inline-block">
                    <li>Manage Your Card</li>
                    <li className="mt-[24px]">Track Your Application</li>
                    <li className="mt-[24px]">Contact Us</li>
                    </ul>
                    <ul className="hidden sm:inline-block">
                    <li>Manage Your Card</li>
                    <li className="mt-[24px]">Track Your Application</li>
                    <li className="mt-[24px]">Contact Us</li>
                    </ul>
               </div>
               </footer>
          </>
  )
};

export default Footer;
