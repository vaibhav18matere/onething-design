import {useState, useEffect} from "react";
import reward from "./../assets/reward.svg";
import rightArrBlack from './../assets/rightArrow.svg';
import creditcard1 from './../image/creditcard1.jpg';
import creditcard2 from './../image/creditcard2.jpg';
import creditcard3 from './../image/creditcard3.jpg';

const Rewards = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    creditcard1,
    creditcard2,
    creditcard3,
    creditcard1,
    creditcard2,
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

     return (
          <>
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
          </>
     )
}

export default Rewards;
