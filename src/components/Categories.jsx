import React from 'react'

const Categories = React.memo(function Categories({ items, onClickItem }) {

    const [activeItem, setActiveItem] = React.useState(null);   // В initialState передал null для отображения всего каталога при первом рендере страницы   

    const onSelectItem = (arg) => {
        setActiveItem(arg);  // В arg хранятся ключи эллементов из категорий items. По клику добавляем класс active. 
        onClickItem(arg);
    }

    return (
        < div className="categories" >
            <ul>
                <li
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}> 
                    Все
                </li> 

                {items &&
                    items.map((name, arg) => (
                <li
                    className={activeItem === arg ? 'active' : ''}
                    onClick={() => onSelectItem(arg)} 
                    key={arg}>
                    {name}
                </li>
            ))}
            </ul>
        </div>
    )

}
)
export default Categories