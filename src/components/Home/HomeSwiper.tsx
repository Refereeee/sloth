/* eslint-disable react/jsx-props-no-spreading */
import {  Pagination,  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import styles from './Home.module.scss';
import { homeOptions } from '../../redux/slice/homeSlice';
import { ObjLinksType } from '../../types/homeDataTypes';

const MainLink = ({id, img, linkName, linkTo, price, firstLine, boughtLine } :ObjLinksType) =>{

  return (
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
  )
}


export const LinkSwiper = () => {

   const {
     objectLinks,
   } = useSelector(homeOptions);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      // breakpoints={{
      //   640: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      //   },
      //   768: {
      //     slidesPerView: 4,
      //     spaceBetween: 40,
      //   },
      //   1024: {
      //     slidesPerView: 5,
      //     spaceBetween: 50,
      //   },
      // }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {
        objectLinks.map((objectLink) => (
          <SwiperSlide >
           <MainLink {...objectLink} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};




export const HomeAllLinks = () => {

  const {
    objectLinks,
  } = useSelector(homeOptions);

  return (
    <>
      {
        objectLinks
          .map((objectLink) => (
            <MainLink {...objectLink} />
          ))
      }
    </>
  );

};



