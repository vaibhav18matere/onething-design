import rightArrBlack from "./assets/chevron-right-black.svg";
import stepField from "./assets/stepsFields.svg";
import eligibility from "./assets/eligibleDoc.svg";
import styleIcon from "./assets/style.svg";
import card1 from "./assets/card1.svg";
import card2 from "./assets/card2.svg";
import card3 from "./assets/card3.svg";
import card4 from "./assets/card4.svg";
import reward from "./assets/reward.svg";
import { useState, useEffect } from "react";
import BankCarousal from "./bankCarousal";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import GetStarted from "./components/GetStarted";
import GetStartedMobile from "./components/GetStartedMobile";
import Header from "./components/Header";

function App() {

  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg",
    "https://images6.alphacoders.com/462/thumb-1920-462371.jpg",
    "https://wallpaperaccess.com/full/1154341.jpg",
    "https://wallpapercave.com/wp/wp2634222.jpg",
    "https://images5.alphacoders.com/343/thumb-1920-343645.jpg",
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex, images.length]);


  return (
    <>
      <Header/>
      <GetStarted/>
      <div className="section-3-mobile px-[24px] pb-[48px] sm:py-[32px] sm:hidden">
        <p className="font-medium text-[24px] leading-[34px] text-[#000000]">
          Create your own credit card in three easy steps
        </p>
        <img className="mt-[32px]" src={stepField} />
        <h6 className="mt-[16px] font-medium text-[18px] leading=[21.09px]">
          Fill Eligibility Form
        </h6>
        <p className="mt-[16px] font-normal text-base leading-[24px] text-[#000000]">
          Please fill an application form to make sure you&apos;re eligible for the
          card. You can fill this later as well
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
      <div className="hidden sm:flex section-3-desktop flex w-full">
        <div className="w-3/6 flex flex-col gap-y-[80px] bg-[#BFE1FF] items-center py-[64px]">
          <input
            className="w-[400px] h-[64px] rounded-[10px] font-medium p-[16px]"
            type="text"
            placeholder="Enter your phone number"
          ></input>
          <input
            className="w-[400px] h-[64px]  rounded-[10px] p-[16px] bg-[rgba(0, 0, 0, 0.1)]"
            type="text"
            placeholder="Enter your PAN number"
          ></input>
          <input
            className="w-[400px] h-[64px]  rounded-[10px] p-[16px]"
            type="text"
            placeholder="Enter your Address"
            disabled
          ></input>
        </div>
        <div className="w-3/6 flex flex-col justify-center items-center text-left gap-y-[16px]">
          <div>
            <img className="w-[64px] h-[64px]" src={eligibility} />
            <h6 className="font-medium text-[40px] leading-[60px] text-[#000000]">
              Fill Eligibility Form
            </h6>
            <p className="font-normal text-[24px] leading-[36px]">
              Tell us about yourself, to find out if you’re eligible to apply.
            </p>
          </div>
        </div>
      </div>
      <div className="section-4 bg-[#ffffff] sm:bg-[#FFE4E7] px-[24px] pb-[48px] sm:px-[108px] sm:py-[104px] flex flex-col-reverse sm:flex-row">
        <div className="flex-col desktop gap-y-[16px] text-[#000000] w-6/12 pr-[128px] hidden sm:flex">
          <img className="w-[64px] h-[64px]" src={reward} />
          <h6 className="font-medium text-[40px] leading-[60px]">
            Choose Your Rewards
          </h6>
          <p className="font-normal text-[24px] leading-[36px]">
            Match your card to your lifestyle. We&apos;ve got benefits from across
            brands & categories for you to choose from. Each benefit has an
            attached fee. Just add the ones you like to your card.
          </p>
        </div>
        <div className="flex flex-col mobile gap-y-[16px] text-[#000000] w-full pr-[128px] sm:hidden mt-[16px]">
          <h6 className="font-medium text-[18px] leading-[21.09px]">
            Choose Your Rewards
          </h6>
          <p className="font-normal text-base leading-[24px]">
            Match your card to your lifestyle. We&apos;ve got benefits from across
            brands & categories for you to choose from. Each benefit has an
            attached fee. Just add the ones you like to your card.
          </p>
          <div className="flex gap-x-[6px] items-center">
            <a
              href="#"
              className="underline font-medium text-base leading-[24px] text-[#000000]"
            >
              Get Started
            </a>
            <img src={rightArrBlack} />
          </div>
        </div>
        <div className="bg-[#FFE4E7] sm:bg-[transparent] w-full sm:w-6/12 h-[272px] py-[24px] sm:py-[0] sm:h-[400px]">
          <section id="slider">
            {images.map((image, index) => (
              <>
                <input
                  type="radio"
                  name="slider"
                  id={`s${index + 1}`}
                  checked={index === activeIndex}
                  onChange={() => setActiveIndex(index)}
                />
                <label
                  key={index}
                  htmlFor={`s${index + 1}`}
                  id={`slide${index + 1}`}
                >
                  <img src={image} alt={`Slide ${index}`} />
                </label>
              </>
            ))}
          </section>
        </div>
      </div>
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
      <GetStartedMobile/>
      <Accordion/>
      <Footer/>
    </>
  );
}

export default App;
