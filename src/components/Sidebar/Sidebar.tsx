import React, {useState} from 'react';
import styles from "./Sidebar.module.scss"
import {SiFifa} from "react-icons/si";
import {GiCagedBall, GiThunderball} from "react-icons/gi";
import {Link} from "react-router-dom";
import logo from "../../assets/fifa-logo2.png";


const Sidebar = () => {

    const objectForLinks = [{
        id: 1,
        img: <GiCagedBall/>,
        linkName: "Weekend League",
        linkTo: "/weekend"
    },
        {
            id: 2,
            img: <SiFifa/>,
            linkName: "Divisions Rivals",
            linkTo: "/divisions"
        },
        {
            id: 3,
            img: <GiThunderball/>,
            linkName: "Tasks",
            linkTo: "/tasks"
        },
    ]

    return (
        <div className={styles.sidebarWrapper}>
            <div className={styles.imgWrapper}>
                <img src={logo} className={styles.img} alt='comfy'/>
            </div>
            <div className={styles.nav}>
                <div><h3 className={styles.heading}>Boost</h3>
                    <ul className={styles.listLinks}>
                        <>
                            {objectForLinks.map(({img, linkName, linkTo}) => (
                                <li className={styles.link}>
                                    <Link to={linkTo} className={styles.weekend}>
                                        <span>{img}</span>
                                        <span>{linkName}</span>
                                    </Link>
                                </li>
                            ))
                            }
                        </>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;