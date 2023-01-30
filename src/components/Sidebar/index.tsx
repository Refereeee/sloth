import React, {useState} from 'react';
import styles from "./Sidebar.module.scss"
import {SiFifa} from "react-icons/si";
import {GiCagedBall, GiThunderball} from "react-icons/gi";
import {Link, NavLink, useLocation} from "react-router-dom";


const Sidebar = () => {

    const objectForLinks = [
        {
        id: 1,
        img: <GiCagedBall/>,
        linkName: "Weekend League",
        linkTo: "/weekend"
    },
        {
            id: 2,
            img: <SiFifa/>,
            linkName: "Index Rivals",
            linkTo: "/divisions"
        },
        {
            id: 3,
            img: <GiThunderball/>,
            linkName: "Tasks",
            linkTo: "/tasks"
        },
    ]

    const [activate, setActivate] = useState(false)
    const location = useLocation();

    const clickActive = () => {
        setActivate(true)
    }

    return (
        <div className={styles.sidebarWrapper}>

            <div className={styles.nav}>
                <div><h3 className={styles.heading}>Boost</h3>
                    <ul className={styles.listLinks}>
                        <>
                            {objectForLinks.map(({img, linkName, linkTo, id}) => (
                                <li  key = {id}
                                    onClick={() => clickActive()}>
                                    <NavLink to={linkTo}  className={({isActive})=> isActive? styles.weekend && styles.activate : styles.weekend}>
                                        <span className={styles.changeColor}>{img}</span>
                                        <span>{linkName}</span>
                                    </NavLink>
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