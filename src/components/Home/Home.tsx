import React, {useEffect} from 'react';
import styles from './Home.module.scss'
import {HiSearch} from "react-icons/hi";
import {useAppDispatch} from "../../redux/hooks";
import {fetchProductsByApi, selectProductsFilter, setInputValue} from "../../redux/slice/productsFilter";
import {useSelector} from "react-redux";
import Select from 'react-select'
import FilterForm from "../FilterForm/FilterForm";

const Home: React.FC = () => {

    const dispatch = useAppDispatch()
    const {categories, companies, colors, priceValue,products} = useSelector(selectProductsFilter)

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
                <FilterForm/>
                <div className={styles.productsItemsWrapper}>

                </div>
            </div>
        </div>

    );
};

export default Home;