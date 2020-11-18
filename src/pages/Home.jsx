import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, PizzaBlock, SortPopup, PizzaLoadingBlock } from '../components';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' }
];


const Home = () => {

    const dispatch = useDispatch()

    const items = useSelector(({ pizzas }) => pizzas.items);    //Вытаскиваем items

    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded); //Вытаскиваем isLoaded

    const { category, sortBy } = useSelector(({ filters }) => filters);


    React.useEffect(() => {
        dispatch(fetchPizzas())
    }, [category]);

    const onSelectCategory = React.useCallback((index) => {
            dispatch(setCategory(index))
    }, [])

    return (
        <div className="container"> 
            <div className="content__top">

                <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames} />

                <SortPopup items={sortItems} />

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded ? (items.map((obj) => <PizzaBlock isLoading={true} key={obj.id} {...obj} />)) : Array(10).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />) // Деструктуризировал {obj}. В нем хранятся свойства {pizzas} из db.json
                }
            </div>
        </div>
    )
}

export default Home
