import React from 'react'

class Categories extends React.Component {

    state = {
        activeItem: 3
    }

    render() {

        const { items, onClickItem } = this.props;

        return (
            < div className="categories" >
                <ul>
                    <li className="active">Все</li>
                    {items.map((name, arg) => (
                        <li
                            className={this.state.activeItem === arg ? 'active' : ''}
                            onClick={() => onClickItem(name)} key={arg}>{name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

/* const Categories = ({ items, onClickItem }) => {
    return (
        < div className="categories" >
            <ul>
                <li className="active">Все</li>
                {items.map((name, arg) => (
                    <li onClick={() => onClickItem(name)} key={arg}>{name}</li>
                ))}
            </ul>
        </div>
    )

} */

export default Categories
