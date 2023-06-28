import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useSelector } from 'react-redux';
import React, { ChangeEvent, useEffect } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
// import { v4 as uuidv4 } from 'uuid';
import styles from './Playoff.module.scss';
import Sidebar from '../Sidebar';
import { useAppDispatch } from '../../redux/hooks';
import playoffImg from '../../assets/playoffs/fut-qualy.jpg';
import {
  changeHowWorkFlag,
  changePlatformValue,
  changeRangeValue,
  changeRequirementFlag,
  changeStreamValue,
  selectPlayoff,
} from '../../redux/slice/playoffSlice';
import platformData from '../../data/playoffData';
import sliceStringRange from '../../redux/slice/functions/funcforRangeHandler';
// import { addItem } from '../../redux/slice/cartSlice';

const Playoff = () => {
  const dispatch = useAppDispatch();
  const {
    requirementFlag,
    howWorkFlag,
    platformValue,
    streamCheckboxValue,
    rangeValue,
  } = useSelector(selectPlayoff);

  const priceValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rangeValue * 7);

  // eslint-disable-next-line no-unused-vars
  // const uniqueId = uuidv4();

  const radioHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changePlatformValue(event.target.value));
  };
  const rangeHandler = (value:string) => {
    dispatch(changeRangeValue(+(sliceStringRange(value))));
  };
  const checkBoxStream = () => {
    dispatch(changeStreamValue());
  };
  const changeRequirementsValue = () => {
    dispatch(changeRequirementFlag());
  };
  const toggleHowWorkFlag = () => {
    dispatch(changeHowWorkFlag());
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    return e.preventDefault();
  };

  useEffect(() => {
    console.log(window.location.href);
  }, []);
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
                <div
                  className={requirementFlag ? styles.requirementsSvgTransform : styles.requirementsSvgBlock}
                >
                  <AiOutlineDown />
                </div>
              </div>
              <ul className={requirementFlag ? styles.requirementsList : styles.dn}>
                <li className={styles.listParam}>Active FIFA 23 account;</li>
                <li className={styles.listParam}>1250 Divisions Rivals points;</li>
                <li className={styles.listParam}>
                  Team with high chemistry, meta players and 85+
                  rating required. Please contact us before purchasing 6+ wins, so we can discuss
                  all the details and know more about your team.
                </li>
              </ul>
            </div>
            <div className={styles.howBlock} onClick={() => toggleHowWorkFlag()}>
              <div className={styles.howTitle}>
                <h5>How IT WORKS</h5>
                <div className={howWorkFlag ? styles.howSvgTransform : styles.howSvgBlock}>
                  <AiOutlineDown />
                </div>
              </div>
              <ul className={howWorkFlag ? styles.howWorkList : styles.dn}>
                <li className={styles.howParam}>
                  Select preferred options and place an order for the
                  FIFA Champions Finals Boost;
                </li>
                <li className={styles.howParam}>
                  We will contact you via our live chat or by sending
                  an email;
                </li>
                <li className={styles.howParam}>
                  All the details will be discussed beforehand, and
                  the start time will be set according to your schedule;
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={formSubmit}>
              <div className={styles.formImageBlock}>
                <img src={playoffImg} alt="playoff" className={styles.formImage} />
                <div className={styles.formImageGradient} />
              </div>
              <div className={styles.platformOptionsWrapper}>
                <div className={styles.selectChapters}>
                  <div className={styles.selectChaptersTitleBlock}>
                    <h6 className={styles.selectChaptersTitle}>Platform</h6>
                    <div className={styles.playoffTitleAfter} />
                  </div>
                  <div className={styles.selectPlatforms}>
                    {
                      platformData.map(({
                        id,
                        platform,
                      }) => {
                        return (
                          <div className={styles.platformBlock}>
                            <label className={styles.platformLabel} key={id} htmlFor={platform}>
                              <input
                                type="radio"
                                value={platform}
                                id={platform}
                                checked={platformValue === platform}
                                className={styles.platformRadio}
                                onChange={radioHandler}
                                name="PlatformName"
                              />
                              <div
                                className={platformValue === platform ? styles.platformOption : styles.platformOptionNotActive}
                              >
                                <span className={styles.platformText}>
                                  {platform}
                                </span>
                              </div>
                            </label>
                          </div>
                        );
                      })
                    }
                  </div>
                  <div className={styles.formAdditionOptionsBlock}>
                    <div className={styles.formAdditionTitleBlock}>
                      <h6 className={styles.formAdditionOptionsTitle}>Additional Options</h6>
                      <div className={styles.playoffTitleAfter} />
                    </div>
                    <div className={styles.formAdditionOptionsParam}>
                      <label htmlFor="stream">
                        <input
                          className={styles.streamInput}
                          type="checkbox"
                          id="stream"
                          checked={streamCheckboxValue}
                          onChange={checkBoxStream}
                        />
                        <div className={streamCheckboxValue ? styles.customCheckbox : styles.customCheckboxNone}>
                          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff">
                            <path d="m4.72 6.622-2.671-2.67A1.2 1.2 0 1 0 .35 5.648l4.53 4.529 6.84-8.21A1.2 1.2 0 1 0 9.879.432L4.72 6.622Z" fill="#fff" />
                          </svg>
                        </div>
                        <span>Stream</span>
                      </label>
                    </div>
                  </div>
                  <div className={styles.formWinsBlock}>
                    <div className={styles.formWinsTitleBlock}>
                      <h6 className={styles.formWinsTitle}>Number of Wins</h6>
                      <div className={styles.playoffTitleAfter} />
                    </div>
                    <div className={styles.formWinsInputs}>
                      <div className={styles.formInputNumberWrapper}>
                        <input
                          type="number"
                          id="tentacles"
                          name="wins"
                          min="1"
                          max="100"
                          value={rangeValue}
                          onChange={(e:any) => rangeHandler(e.target.value)}
                          className={styles.formInputNumber}
                        />
                      </div>
                      <div>
                        <Slider
                          handleStyle={{
                            backgroundColor: '#fff',
                            border: 'none',
                            borderRadius: 7,
                            height: 26,
                            marginLeft: 0,
                            marginTop: -5,
                            transition: 'box-shadow .3s ease',
                            width: 26,
                          }}
                          railStyle={{
                            background: '#293054',
                            height: 16,
                          }}
                          trackStyle={{
                            background: 'linear-gradient(270deg,#a97bff -14.29%,#7422f9 72.02%,#564fff)',
                            height: 16,
                            position: 'absolute',
                          }}
                          activeDotStyle={{
                          }}
                          onChange={(nextValues) => {
                            rangeHandler(String(nextValues));
                          }}
                          min={1}
                          max={10}
                          value={rangeValue}
                          defaultValue={rangeValue}
                          step={1}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.playoffPrice}>
                    <span className={styles.playoffPriceText}>{priceValue}</span>
                  </div>
                  <div className={styles.playoffButtonToCartWrapper}><button className={styles.playoffButtonToCart}>Add To Cart</button></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playoff;
