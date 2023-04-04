import { useSelector } from 'react-redux';
import styles from './Playoff.module.scss';
import Sidebar from '../Sidebar';
import { useAppDispatch } from '../../redux/hooks';
import playoffImg from '../../assets/playoffs/fut-qualy.jpg';
import {
  changeHowWorkFlag,
  changeRequirementFlag,
  selectPlayoff,
} from '../../redux/slice/playoffSlice';

const Playoff = () => {
  const dispatch = useAppDispatch();
  const { requirementFlag, howWorkFlag } = useSelector(selectPlayoff);
  const changeRequirementsValue = () => {
    dispatch(changeRequirementFlag());
  };
  const toggleHowWorkFlag = () => {
    dispatch(changeHowWorkFlag());
  };
  return (
    <section className={styles.main}>
      <Sidebar />
      <div className={styles.backgroundImg}>
        <div className={styles.wrapperContent}>
          <div className={styles.mainContent}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>FUT CHAMPIONS PLAYOFFS BOOST</h1>
            </div>
            <div className={styles.textBlocks}>
              <p className={styles.text}>Buy FIFA 23 FUT Champions Playoffs and get as many wins as you want in this mode, obtaining FUT Champions points and unlocking valuable rewards.</p>
              <p className={styles.text}>FUT Champions as a gamemode is divided into two parts: Playoffs and Qualifiers, that start with each new season, and Finals that have special schedule. These are the most difficult gamemodes in the game. In Playoffs, you are given 10 chances to reach as many wins as possible. Each victory, brings you a special reward, that becomes more and more valuable the more wins you get. </p>
              <p className={styles.text}>With FIFA 23 FUT Champions boost from Overgear you will be able to get up to 10 wins in this mode, saving your time and nerves and obtaining these rewards with ease. </p>
            </div>
            <div className={styles.getBlock}>
              <h4 className={styles.getTitle}>WHAT YOU WILL GET</h4>
              <ul className={styles.getList}>
                <li className={styles.getString}>Chosen number of wins reached;</li>
                <li className={styles.getString}>Chance to obtain various FUT Champions rewards depending on the number of wins.</li>
              </ul>
            </div>
            <div className={styles.addOptionsBlock}>
              <h4 className={styles.addOptionsBlockTitle}>WHAT YOU WILL GET</h4>
              <ul className={styles.optionsList}>
                <li className={styles.optionsParam}>1250 Division Rivals Points - in order to unlock access to the FUT Champions mode, you have to farm points in Divisions Rivals, and our players are ready to help you with that. </li>
                <li className={styles.optionsParam}>Stream - watch how our boosters complete your FIFA 23 FUT Champions Playoffs boost.</li>
              </ul>
            </div>
            <div className={styles.requirementsBlock} onClick={() => changeRequirementsValue()}>
              <div className={styles.requirementsTitle}>
                <h5>Requirements</h5>
              </div>
              <ul className={requirementFlag ? styles.requirementsList : styles.dn}>
                <li className={styles.listParam}>Active FIFA 23 account;</li>
                <li className={styles.listParam}>1250 Divisions Rivals points;</li>
                <li className={styles.listParam}>Team with high chemistry, meta players and 85+ rating required. Please contact us before purchasing 6+ wins, so we can discuss all the details and know more about your team.</li>
              </ul>
            </div>
            <div className={styles.howBlock} onClick={() => toggleHowWorkFlag()}>
              <div className={styles.howTitle}>
                <h5>How IT WORKS</h5>
              </div>
              <ul className={howWorkFlag ? styles.requirementsList : styles.dn}>
                <li className={styles.howParam}>Select preferred options and place an order for the FIFA Champions Finals Boost;</li>
                <li className={styles.howParam}>We will contact you via our live chat or by sending an email;</li>
                <li className={styles.howParam}>All the details will be discussed beforehand, and the start time will be set according to your schedule;</li>
              </ul>
            </div>
          </div>
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              <div className={styles.formImageBlock}>
                <img src={playoffImg} alt="playoff" className={styles.formImage} />
                <div className={styles.formImageGradient} />
              </div>
              {/* <div className={styles.formImageGradient} /> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playoff;
