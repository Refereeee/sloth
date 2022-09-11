import React, {useEffect} from 'react';
import styles from './Home.module.scss'
import {HiSearch} from "react-icons/hi";
import {useAppDispatch} from "../../redux/hooks";
import {fetchProductsByApi, selectProductsFilter} from "../../redux/slice/productsFilter";
import {useSelector} from "react-redux";
import Select from 'react-select'

const Home = () => {

    const dispatch = useAppDispatch()
    const {categories, companies, colors} = useSelector(selectProductsFilter)

    const fetchProducts = () => {
        dispatch(fetchProductsByApi())
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <div className={styles.headingWrapper}>
                <h2 className={styles.heading}>Products</h2>
            </div>
            <div className={styles.productsWrapper}>
                <div className={styles.searchFormWrapper}>
                    <form className={styles.productForm}>
                        <div className={styles.inputWrapper}>
                            <HiSearch className={styles.inputIcon}/>
                            <input type='text' placeholder='Search' className={styles.inputSearch}/>
                        </div>
                        <div className="categories">
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
                                {colors.map(el => {
                                    if (el !== 'All') {
                                        return (
                                            <li style={{backgroundColor: `${el}`, width: '1rem',borderRadius:'50%',height:'1rem'}}>
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
                    </form>
                </div>
                <div className={styles.products}>

                </div>
            </div>
        </div>

    );
};

export default Home;