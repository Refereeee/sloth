import React, { useState } from 'react';
import { SiFifa } from 'react-icons/si';
import { GiCagedBall, GiThunderball } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const objectForLinks = [
    {
      id: 1,
      img: <GiCagedBall />,
      linkName: 'Fut Champions PlayOffs',
      linkTo: '/fut-champions-playoffs',
    },
    {
      id: 2,
      img: <GiThunderball />,
      linkName: 'Fut Champions Finals',
      linkTo: '/fut-champions-finals',
    },
    {
      id: 3,
      img: <SiFifa />,
      linkName: 'Division Rivals',
      linkTo: '/divisions',
    },
    {
      id: 4,
      img: <GiThunderball />,
      linkName: 'Tasks',
      linkTo: '/tasks',
    },

    {
      id: 5,
      img: <GiThunderball />,
      linkName: 'Draft',
      linkTo: '/draft',
    },
    {
      id: 6,
      img: <GiThunderball />,
      linkName: 'Squad Battles',
      linkTo: '/squad',
    },
  ];

  const [isActive, setActivate] = useState(false);

  const clickActive = () => {
    setActivate(true);
  };

  return (
    <div className={styles.sidebarWrapper}>

      <div className={styles.nav}>
        <div>
          <h3 className={styles.heading}>Boost</h3>
          <ul className={styles.listLinks}>
            {objectForLinks.map(({
              img, linkName, linkTo, id,
            }) => (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li
                key={id}
                onClick={() => clickActive()}
              >
                <NavLink
                  to={linkTo}
                  className={isActive ? styles.weekend && styles.activate : styles.weekend}
                >
                  <span className={styles.changeColor}>{img}</span>
                  <span className={styles.changeColorSpan}>{linkName}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
