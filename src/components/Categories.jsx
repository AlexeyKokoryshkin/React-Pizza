import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {

    const [activeItem, setActiveItem] = React.useState(null);   // В initialState передал null для отображения всего каталога при первом рендере страницы   

    return (
        < div className="categories" >
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}> 
                    Все
                </li> 

                {items && items.map((name, arg) => (
                    <li
                        className={activeCategory === arg ? 'active' : ''}
                        onClick={() => onClickCategory(arg)} 
                        key={arg}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )

})

Categories.propTypes = {
    activeCategory: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickCategory: PropTypes.func
}

Categories.defaultProps = { activeCategory: null, items: [] }
export default Categories