import bankCard from "./assets/bankCard.svg";
export default function BankCarousal() {
  return (
    <section
      className="carousel w-[237.54px] h-[148.46px] sm:w-[389px] sm:h-[243px]"
      aria-label="Gallery"
    >
      <ol className="carousel__viewport">
        <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper"></div>
          <img src={bankCard} />
        </li>
        <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper"></div>
          <img src={bankCard} />
        </li>
        <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper"></div>
          <img src={bankCard} />
        </li>
        <li id="carousel__slide4" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper"></div>
          <img src={bankCard} />
        </li>
      </ol>
      {/* <aside class="carousel__navigation">
        <ol class="carousel__navigation-list">
          <li class="carousel__navigation-item">
            <a href="#carousel__slide1" class="carousel__navigation-button">
              Go to slide 1
            </a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide2" class="carousel__navigation-button">
              Go to slide 2
            </a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide3" class="carousel__navigation-button">
              Go to slide 3
            </a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide4" class="carousel__navigation-button">
              Go to slide 4
            </a>
          </li>
        </ol>
      </aside> */}
    </section>
  );
}
