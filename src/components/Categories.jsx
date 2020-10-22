import React from 'react'

const Categories = ({ items }) => {

    const [activeItem, setActiveItem] = React.useState(null);   // В initialState передал null для отображения всего каталога при первом рендере страницы   

    const onSelectItem = (arg) => {
        setActiveItem(arg);  // В arg хранятся ключи эллементов из категорий items. По клику добавляем класс active. 
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

export default Categories



/* import React from 'react'

class Categories extends React.Component {

    state = {
        activeItem: 0
    }

    onSelectItem = (arg) => {
        this.setState({
            activeItem: arg
        })
    }

    render() {

        const { items, onClickItem } = this.props;

        return (
            < div className="categories" >
                <ul>
                    {items.map((name, arg) => (
                        <li
                            className={this.state.activeItem === arg ? 'active' : ''}
                            onClick={() => this.onSelectItem(arg)}
                            key={arg}>{name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default Categories */
