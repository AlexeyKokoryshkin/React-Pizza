import React from 'react'

const Categories = ({ items }) => {

    const [activeItem, setActiveItem] = React.useState(null);      // Hooks

    const onSelectItem = (arg) => {
        setActiveItem(arg);
    }

    return (
        < div className="categories" >
            <ul>
                <li
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}>
                    Все
                </li>

            {items.map((name, arg) => (
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
