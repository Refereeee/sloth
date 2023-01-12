import React, {useEffect, useRef, useState} from 'react';
import styles from './Home.module.scss'
import firstImg from '../../assets/home/first.jpg'
import boughtImg from '../../assets/home/bought.jpg'
import thirdImg from '../../assets/home/third.jpg'
import fourthImg from '../../assets/home/four.jpg'
import fiveImg from '../../assets/home/five.jpg'
import sixImg from '../../assets/home/six.jpg'
import {AiFillLeftCircle, AiFillRightCircle} from "react-icons/ai";
import {useAppDispatch} from "../../redux/hooks";
import {useSelector} from "react-redux";
import {changeHomeSliderLeft, changeHomeSliderRight, homeOptions} from "../../redux/slice/homeSlice";
import {Link} from "react-router-dom";
import {BiRightArrowAlt} from "react-icons/bi";


const Home = () => {

    const objectForLinks = [
        {
            id: 1,
            img: firstImg,
            linkName: "Fut Champions Playoffs",
            linkTo: "/fut-champions-playoffs",
            price: "From $3.00",
            firstLine: "Get any number of wins in Playoff",
            boughtLine: "Get FUT Champions rewards",
        },
        {
            id: 2,
            img: boughtImg,
            linkName: "Fut Champions finals",
            linkTo: "/fut-champions-finals",
            price: "From $3.00",
            firstLine: "Get any number of wins in Playoff",
            boughtLine: "Unlock FUT Champions rewards",
        },
        {
            id: 3,
            img: thirdImg,
            linkName: "Division Rivals",
            linkTo: "/divisions",
            price: "From $3.00",
            firstLine: "Get desired rank with ease",
            boughtLine: "Obtain unique rewards",
        },
        {
            id: 4,
            img: fourthImg,
            linkName: "Squad Battles",
            linkTo: "/squad-battles",
            price: "From $3.00",
            firstLine: "4 daily wins",
            boughtLine: "Gold and players as rewards",
        },
        {
            id: 5,
            img: fiveImg,
            linkName: "Draft",
            linkTo: "/draft",
            price: "From $3.00",
            firstLine: "Get desired rank with ease",
            boughtLine: "Obtain unique rewards",
        },
        {
            id: 6,
            img: sixImg,
            linkName: "Tasks",
            linkTo: "/tasks",
            price: "From $3.00",
            firstLine: "Get another task with ease",
            boughtLine: "Obtain rewards",
        },
    ]

    const dispatch = useAppDispatch()

    const {
        sliderRight,
        sliderLeft
    } = useSelector(homeOptions)

    const slide = React.useRef<HTMLDivElement>(null)

    const changeSlidePositionLeft = () => {
        dispatch(changeHomeSliderLeft(true))
    }


    const changeSlidePositionRight = () => {
        dispatch(changeHomeSliderRight(true))
    }

    // useEffect(() => {
    //     if (sliderLeft && slide.current) {
    //         console.log(sliderLeft)
    //         // slide.current.style.transform = "translate3d(0px, 0px, 0px)"
    //     }
    //     if (sliderRight && slide.current) {
    //         // slide.current.style.transform = "translate3d(-1260px, 0px, 0px)"
    //         console.log(sliderRight)
    //     }
    // }, [sliderRight, sliderLeft])

    return (
        <div className={styles.mainPageWrapper}>
            <div className={styles.mainPage}>
                <div className={styles.titleBlock}>
                    <h1 className={styles.title}>FIFA 23 Boost</h1>
                </div>
                <div className={styles.description}>
                    <p className={styles.descriptionContent}>
                        <span className={styles.descriptionText}>Buy FIFA boost services from FifaBoosting. Get exclusive boosting done by professional FIFA players with years of experience.</span>
                        <span className={styles.descriptionText}>Get wins in FUT Champions mode, boost your Division Rivals' rank and get many more other services for a cheap price.</span>
                        <span className={styles.descriptionText}>Get all youneed for comfortable yet effective gaming with FifaBoosting boost services.</span>
                    </p>
                </div>
                <div className={styles.swiperWrapper}>
                    <div className={styles.swiperArrows}>
                        <div className={styles.leftArrow} onClick={() => changeSlidePositionLeft()}><AiFillLeftCircle/>
                        </div>
                        <div className={styles.rightArrow} onClick={() => changeSlidePositionRight()}>
                            <AiFillRightCircle/></div>
                    </div>
                    <div className={sliderRight ? styles.swiperRight : styles.swiperBlocks} ref={slide}>
                        <>
                            {
                                objectForLinks.map(({id, img, linkName, linkTo, price, firstLine, boughtLine}) =>
                                    (
                                        <div className={styles.swiperBlock}>
                                            <Link to={linkTo} className={styles.swiperLink}>
                                                <img className={styles.swiperImage} alt={linkName} src={img}/>
                                                <div className={styles.swiperContent}>
                                                    <ul className={styles.swiperDescription}>
                                                        <li className={styles.swiperName}>{linkName}</li>
                                                        <li className={styles.swiperFirst}>{firstLine}</li>
                                                        <li className={styles.swiperBought}>{boughtLine}</li>
                                                    </ul>
                                                    <div className={styles.swiperSubDiscription}>
                                                        <button><Link to={linkTo}><BiRightArrowAlt/></Link></button>
                                                        <p className={styles.swiperPrice}>{price}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                )
                            }
                            {/*<div className={styles.swiperBlock}><img className={styles.swiperImage} alt="first"*/}
                            {/*                                         src={firstImg}/></div>*/}
                            {/*<div className={styles.swiperBlock}><img className={styles.swiperImage} alt="first"*/}
                            {/*                                         src={boughtImg}/></div>*/}
                            {/*<div className={styles.swiperBlock}><img className={styles.swiperImage} alt="first"*/}
                            {/*                                         src={thirdImg}/></div>*/}
                            {/*<div className={styles.swiperBlock}><img className={styles.swiperImage} alt="first"*/}
                            {/*                                         src={fourthImg}/></div>*/}
                            {/*<div className={styles.swiperBlock}><img className={styles.swiperImage} alt="first"*/}
                            {/*                                         src={fiveImg}/></div>*/}
                            {/*<div className={styles.swiperBlock}><img className={styles.swiperImage} alt="first"*/}
                            {/*
                                                              src={sixImg}/></div>*/}
                        </>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;