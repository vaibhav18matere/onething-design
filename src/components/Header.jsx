import {useState} from "react";
import HeroSection from "./HeroSection";
import hamburegrMenu from "./../assets/hamburgerMenu.svg";

const Header = () => {
       const [isMobileList, setIsMobileList] = useState(false);
       const toggleMobileList = () => setIsMobileList((prev) => !prev);
     return (
          <>
               <div className="h-[100vh]">
                    <header className="flex justify-between items-center px-[21px] sm:px-[106px] py-[21px] sm:py-[27px] h-[64px] sm:h-[104px] ">
                         <button className="w-[102px] h-[37px] sm:w-[135px] sm:h-[49px] bg-[#000000] text-white text-[14px] sm:text-[20px] font-bold leading-[14.2px] sm:leading-[20.6px]">
                         AFC Inc.
                         </button>
                         <div className="flex gap-x-10 items-center">
                         <ul className="flex gap-x-10 hidden sm:flex">
                         <li className="inline text-base leading-6 font-medium	">
                              <a href="#!">Track Application</a>
                         </li>
                         <li className="inline text-base leading-6 font-medium	">
                              <a href="#!">Manage My Card</a>
                         </li>
                         <li className="inline text-base leading-6 font-medium	">
                              <a href="#!">FAQs</a>
                         </li>
                         </ul>
                         <button className="block sm:hidden" onClick={toggleMobileList}>
                         <img src={hamburegrMenu} />
                         </button>
                         <button className="hidden sm:flex w-[131px] h-[40px] rounded bg-[#F2707C] flex items-center justify-center text-[#FFFFFF] font-bold text-base leading-6">
                         Get Started
                         </button>
                         </div>
                    </header>
                    {isMobileList && (
                         <div id="myLinks" className="options">
                         <a href="#!">News</a>
                         <a href="#!">Contact</a>
                         <a href="#!">About</a>
                         </div>
                    )}
                    <HeroSection/>
               </div>
          </>
  )
};

export default Header;
