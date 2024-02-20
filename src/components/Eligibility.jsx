import rightArrBlack from './../assets/chevron-right-black.svg';
import stepField from './../assets/stepsFields.svg';
import eligibility from './../assets/eligibleDoc.svg';

const Eligibility = () => {
     return (
          <>
            <div className="section-3-mobile px-[24px] pb-[48px] sm:py-[32px] sm:hidden">
              <p className="font-medium text-[24px] leading-[34px] text-[#000000] mt-2">
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
                  href="#!"
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
                    Tell us about yourself, to find out if you&apos;re eligible to apply.
                  </p>
                </div>
              </div>
            </div>
          </>
  )
};

export default Eligibility;
