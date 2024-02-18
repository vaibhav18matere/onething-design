import hamburegrMenu from "./assets/hamburgerMenu.svg";
import creditCard from "./assets/creditCard.svg";
import rightArrow from "./assets/rightArrow.svg";
import rightArrBlack from "./assets/chevron-right-black.svg";
import stepField from "./assets/stepsFields.svg";
import eligibility from "./assets/eligibleDoc.svg";
import bmsCard from "./assets/bmsCard.svg";
import bankCard from "./assets/bankCard.svg";
import styleIcon from "./assets/style.svg";
import card1 from "./assets/card1.svg";
import card2 from "./assets/card2.svg";
import card3 from "./assets/card3.svg";
import card4 from "./assets/card4.svg";
import reward from "./assets/reward.svg";
import Accordian from "./accordian";
import { useState, useEffect } from "react";
import BankCarousal from "./bankCarousal";

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
function App() {
  const [isMobileList, setIsMobileList] = useState(false);
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
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [activeIndex, images.length]);

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
                <a href="default.asp">Track Application</a>
              </li>
              <li className="inline text-base leading-6 font-medium	">
                <a href="news.asp">Manage My Card</a>
              </li>
              <li className="inline text-base leading-6 font-medium	">
                <a href="contact.asp">FAQs</a>
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
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        )}

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
          <div className="w-100 sm:w-6/12 h-half">
            <img className="w-100  h-[240px] sm:h-full" src={creditCard} />
          </div>
        </div>
      </div>
      <div className="second-section bg-[#8E7CB5] px-[24px] pt-[32px] pb-[48px] sm:px-[108px] sm:py-[108px] flex flex-col sm:flex-row gap-x-[100px] sm:items:center">
        <p className="font-medium text-2xl sm:text-[40px] leading-[36px] sm:leading-[56px] text-[#ffffff] w-full sm:w-3/6">
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
            That's why it comes with benefits & rewards chosen by you. Available
            in multiple designs, your card comes in a style selected by you. You
            can come back each year, to edit your benefits or update your style.
          </p>
          <p className="mt-[16px] text-base font-normal leading-[24px] text-[#FFFFFF]">
            Your OneSync Credit Card stays true to you, year after year. It’s
            the only card you’ll ever need.
          </p>

          <div className="flex gap-x-[16px] text-[#FFFFFF] text-[20px] leading-[30px] font-medium mt-[16px]">
            <a className="underline" href="#">
              Get Started
            </a>
            <img src={rightArrow} />
          </div>
        </div>
      </div>
      <div className="section-3-mobile px-[24px] pb-[48px] sm:py-[32px] sm:hidden">
        <p className="font-medium text-[24px] leading-[34px] text-[#000000]">
          Create your own credit card in three easy steps
        </p>
        <img className="mt-[32px]" src={stepField} />
        <h6 className="mt-[16px] font-medium text-[18px] leading=[21.09px]">
          Fill Eligibility Form
        </h6>
        <p className="mt-[16px] font-normal text-base leading-[24px] text-[#000000]">
          Please fill an application form to make sure you’re eligible for the
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
            Match your card to your lifestyle. We've got benefits from across
            brands & categories for you to choose from. Each benefit has an
            attached fee. Just add the ones you like to your card.
          </p>
        </div>
        <div className="flex flex-col mobile gap-y-[16px] text-[#000000] w-full pr-[128px] sm:hidden mt-[16px]">
          <h6 className="font-medium text-[18px] leading-[21.09px]">
            Choose Your Rewards
          </h6>
          <p className="font-normal text-base leading-[24px]">
            Match your card to your lifestyle. We've got benefits from across
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
      <div className="section-credit-card flex flex-col sm:flex-row pb-[48px] pl-[24px] pr-[24px] sm:py-[70px] pl-[212px] pr-[109px]  sm:bg-[#F7F3FF]">
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
            or something that catches everyone's eyes, we've got a style for
            you. You can update your style every year, for a small fee{" "}
          </p>
        </div>
        <div className="flex flex-col mt-[16px] gap-y-[16px] w-full mobile sm:hidden">
          <h6 className="font-medium text-[18px] leading-[21.09px] text-[#000000]">
            Select Your Style
          </h6>
          <p className="font-normal text-base leading-[24px] text-[#000000]">
            Whether you like a minimal look or something that catches everyone’s
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
          <a className="underline" href="#">
            Get Started
          </a>
          <img src={rightArrow} />
        </div>
      </div>
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
  );
}

export default App;
