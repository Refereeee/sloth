import { useSelector } from 'react-redux';
import "swiper/scss";
import "swiper/scss/scrollbar";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { useRef } from 'react';
import styles from './Home.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import {
  changeHomeSliderLeft,
  changeHomeSliderRight,
  changeShowAll,
  homeOptions,
} from '../../redux/slice/homeSlice';
import { LeftArrow, RightArrow } from '../../assets/home/svgs/arrows';
import { HomeAllLinks ,LinkSwiper } from './HomeSwiper';

const Home = () => {

  const dispatch = useAppDispatch();

  const {
    sliderRight,
    leftDisabled,
    rightDisabled,
    showAll,
    objectBenefitItems
  } = useSelector(homeOptions);

  const slide = useRef<HTMLDivElement>(null);

  const changeSlidePositionLeft = () => {
    dispatch(changeHomeSliderLeft(true));
  };

  const changeSlidePositionRight = () => {
    dispatch(changeHomeSliderRight(true));
  };

  const changeShowAllImages = () => {
    dispatch(changeShowAll(true));
  };

  return (
    <div className={styles.mainPageWrapper}>
      <div className={styles.mainPage}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>FIFA 23 Boost</h1>
        </div>
        <div className={styles.description}>
          <p className={styles.descriptionContent}>
            <span className={styles.descriptionText}>
              Buy FIFA boost services from FifaBoosting.
              Get exclusive boosting done by professional FIFA players with years of experience.
            </span>
            <span className={styles.descriptionText}>
              Get wins in FUT Champions mode, boost yourDivision Rivals
              rank and get many more other services for a cheap price.
            </span>
            <span className={styles.descriptionText}>Get all youneed for comfortable yet effective gaming with FifaBoosting boost services.</span>
          </p>
        </div>
        <div className={styles.swiperWrapper}>
          <div className={styles.changeImages}>
            <div className={showAll ? styles.hiddenItem : styles.swiperAllGames} onClick={() => changeShowAllImages()}>
              Show All
            </div>
            <div className={showAll ? styles.hiddenItem : styles.swiperArrows}>
              <button
                className={styles.leftArrow}
                onClick={() => changeSlidePositionLeft()}
                disabled={leftDisabled}
              >
                <LeftArrow/>
              </button>
              <button
                className={styles.rightArrow}
                onClick={() => changeSlidePositionRight()}
                disabled={rightDisabled}
              >
                <RightArrow/>
              </button>
            </div>
          </div>
          <div
            className={sliderRight ? (showAll ? styles.showAll : styles.swiperRight) : styles.swiperBlocks}
            ref={slide}
          >
            <div className={showAll ? styles.showAll : styles.swiperBlocks}>
              {showAll ? <HomeAllLinks/> : <LinkSwiper/>}
            </div>
          </div>
        </div>
        <div className={styles.benefitBlocks}>
          {
            objectBenefitItems.map(({
              id,
              img,
              heading,
              text,
              alt,
            }) => (
              <div key={id} className={styles.benefitBlockWrapper}>
                <div className={styles.benefitBlock}>
                  <div>
                    <img src={img} alt={alt}/>
                  </div>
                  <h4 className={styles.benefitHeading}>{heading}</h4>
                  <span className={styles.benefitText}>{text}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  );
};

export default Home;
