import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, PizzaBlock, SortPopup } from '../components';
import { setCategory } from '../redux/actions/filters';

const Home = () => {

    const dispatch = useDispatch()

    const items = useSelector(({ pizzas }) => pizzas.items);
    
    return (
        <div className="container"> 
            <div className="content__top">

                <Categories
                    onClickItem={(name) => console.log(name)}
                    items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />

                <SortPopup items={[
                    { name: 'популярности', type: 'popular' },
                    { name: 'цене', type: 'price' },
                    { name: 'алфавиту', type: 'alphabet' }
                ]} />

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />) // Деструктуризировал {obj}. В нем хранятся свойства {pizzas} из db.json
                }   
            </div>
        </div>
    )
}

export default Home
