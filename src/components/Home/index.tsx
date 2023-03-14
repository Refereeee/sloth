import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useRef } from 'react';
import styles from './Home.module.scss';
import firstImg from '../../assets/home/first.jpg';
import boughtImg from '../../assets/home/bought.jpg';
import thirdImg from '../../assets/home/third.jpg';
import fourthImg from '../../assets/home/four.jpg';
import fiveImg from '../../assets/home/five.jpg';
import sixImg from '../../assets/home/six.jpg';
import benefitFirstSvg from '../../assets/home/svgs/firstBenefit.svg';
import benefitBoughtSvg from '../../assets/home/svgs/benefitBought.svg';
import benefitThirdSvg from '../../assets/home/svgs/benefitThird.svg';
import { useAppDispatch } from '../../redux/hooks';
import {
  changeHomeSliderLeft,
  changeHomeSliderRight,
  changeShowAll,
  homeOptions,
} from '../../redux/slice/homeSlice';

const Home = () => {
  const objectForLinks = [
    {
      id: 1,
      img: firstImg,
      linkName: 'Fut Champions Playoffs',
      linkTo: '/fut-champions-playoffs',
      price: 'From $3.00',
      firstLine: 'Get any number of wins in Index',
      boughtLine: 'Get FUT Champions rewards',
    },
    {
      id: 2,
      img: boughtImg,
      linkName: 'Fut Champions finals',
      linkTo: '/fut-champions-finals',
      price: 'From $3.00',
      firstLine: 'Get any number of wins in Index',
      boughtLine: 'Unlock FUT Champions rewards',
    },
    {
      id: 3,
      img: thirdImg,
      linkName: 'Division Rivals',
      linkTo: '/divisions',
      price: 'From $3.00',
      firstLine: 'Get desired rank with ease',
      boughtLine: 'Obtain unique rewards',
    },
    {
      id: 4,
      img: fourthImg,
      linkName: 'Squad Battles',
      linkTo: '/squad-battles',
      price: 'From $3.00',
      firstLine: '4 daily wins',
      boughtLine: 'Gold and players as rewards',
    },
    {
      id: 5,
      img: fiveImg,
      linkName: 'Draft',
      linkTo: '/draft',
      price: 'From $3.00',
      firstLine: 'Get desired rank with ease',
      boughtLine: 'Obtain unique rewards',
    },
    {
      id: 6,
      img: sixImg,
      linkName: 'Tasks',
      linkTo: '/tasks',
      price: 'From $3.00',
      firstLine: 'Get another task with ease',
      boughtLine: 'Obtain rewards',
    },
  ];

  const objectForBenefitItems = [
    {
      id: 1,
      img: benefitFirstSvg,
      alt: 'one',
      heading: 'Best value for your money',
      text: 'We carefully monitor the market every day to get you the best deals from the top level professional suppliers',
    },
    {
      id: 2,
      img: benefitBoughtSvg,
      alt: 'bought',
      heading: '100% Moneyback Guarantee',
      text: 'Our deals protection guarantees that you you will get the currency, item, service you paid for or your money back!',
    },
    {
      id: 3,
      alt: 'third',
      img: benefitThirdSvg,
      heading: 'One-stop shop for all your gaming needs',
      text: 'Whether you seek top quality services or to bargain with sellers on the marketplace - we got you covered',
    },
  ];

  const dispatch = useAppDispatch();

  const {
    sliderRight,
    leftDisabled,
    rightDisabled,
    showAll,
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="h-5 w-5 text-nl-2"
                >
                  <path
                    fill="currentColor"
                    d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
                  />
                </svg>
              </button>
              <button
                className={styles.rightArrow}
                onClick={() => changeSlidePositionRight()}
                disabled={rightDisabled}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="h-5 w-5 text-nl-2"
                >
                  <path
                    fill="currentColor"
                    d="M96 480c-8.188 0-16.38-3.125-22.62-9.375-12.5-12.5-12.5-32.75 0-45.25L242.8 256 73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={sliderRight ? (showAll ? styles.showAll : styles.swiperRight) : styles.swiperBlocks}
            ref={slide}
          >
            <div className={showAll ? styles.showAll : styles.swiperBlocks}>
              {
                objectForLinks.map(({
                  id,
                  img,
                  linkName,
                  linkTo,
                  price,
                  firstLine,
                  boughtLine,
                }) => (
                  <Link to={linkTo} className={styles.swiperBlock} key={id}>
                    <div>
                      <img className={styles.swiperImage} alt={linkName} src={img}/>
                      <div className={styles.swiperContent}>
                        <ul className={styles.swiperDescription}>
                          <li className={styles.swiperName}>{linkName}</li>
                          <li className={styles.swiperFirst}>{firstLine}</li>
                          <li className={styles.swiperBought}>{boughtLine}</li>
                        </ul>
                        <div className={styles.swiperSubDescription}>
                          <button className={styles.subDescriptionButton}>
                            <Link
                              to={linkTo}
                              className={styles.subDescriptionButtonLink}
                            >
                              <BiRightArrowAlt
                                style={{
                                  height: '20px',
                                  width: '24px',
                                }}
                              />
                            </Link>
                          </button>
                          <span className={styles.swiperPrice}>{price}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
        <div className={styles.benefitBlocks}>
          {
            objectForBenefitItems.map(({
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
