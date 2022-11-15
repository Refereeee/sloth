import React from 'react';
import styles from "../Home/Home.module.scss";
import {HiSearch} from "react-icons/hi";
import Select from "react-select";
import {useSelector} from "react-redux";
import {selectProductsFilter, setInputValue} from "../../redux/slice/productsFilter";
import {useAppDispatch} from "../../redux/hooks";

const FilterForm = () => {

    const dispatch = useAppDispatch()

    const {categories, companies, colors, priceValue} = useSelector(selectProductsFilter)

    const getPriceValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setInputValue(event.target.value))
    }
    return (
        <div className={styles.searchFormWrapper}>
            <form className={styles.productForm}>
                <div className={styles.inputWrapper}>
                    <HiSearch className={styles.inputIcon}/>
                    <input type='text' placeholder='Search' className={styles.inputSearch}/>
                </div>
                <div className={styles.categories}>
                    <h3>Category</h3>
                    <ul>
                        {categories.map((el, i) => {
                            return (
                                <li key={i} style={{textTransform: "capitalize"}}>
                                    {el}
                                </li>)
                        })}
                    </ul>
                </div>
                <div className={styles.companies}>
                    <h3>Company</h3>
                    <Select options={companies}/>
                </div>
                <div className={styles.colors}>
                    <h3>Colors</h3>
                    <ul className={styles.colorsList}>
                        {colors.map((el, i) => {
                            if (el !== 'All') {
                                return (
                                    <li key={i} style={{
                                        backgroundColor: `${el}`,
                                        width: '1rem',
                                        borderRadius: '50%',
                                        height: '1rem'
                                    }}>
                                    </li>)
                            } else {
                                return <li>
                                    {el}
                                </li>
                            }
                        })
                        }
                    </ul>
                </div>
                <div className={styles.price}>
                    <h3>Price</h3>
                    <p>${(priceValue / 100).toFixed(2)}</p>
                    <input type="range" onChange={getPriceValue} max='309999' value={priceValue}/>
                </div>
                <div className={styles.shiping}>
                    <p className={styles.shipingName}>Free Shiping</p>
                    <input type="checkbox"/>
                </div>
                <div className={styles.filtersBtn}>
                    <button style={{backgroundColor: "#bb2525",padding:"0.3rem",borderRadius:"10px"}}>Clear Filters</button>
                </div>
            </form>
        </div>
    );
};

export default FilterForm;