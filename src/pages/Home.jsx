import React from 'react';

import { Categories, PizzaBlock, SortPopup } from '../components';

const Home = ({ items }) => {

    return (
        <div className="container">
            <div className="content__top">

                <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
                <SortPopup items={['популярности', 'цене', 'алфавиту']} />

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map((obj) =>
                        <PizzaBlock key={obj.id} {...obj} />   // Деструктуризировал {obj}. В нем хранятся свойства {pizzas} из db.json 
                    )
                }

            </div>
        </div>
    )
}

export default Home
