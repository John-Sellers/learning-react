import PropType from 'prop-types'

function List() {

    const fruits = [{ id: 1, name: 'apple', calories: 100 },
    { id: 2, name: 'banana', calories: 150 },
    { id: 3, name: 'grapefruit', calories: 90 },
    { id: 4, name: 'passionfruit', calories: 200 }];

    const lowCalFruits = fruits.filter(fruit => fruit.calories <= 100)

    const listItems = fruits.map(fruit =>
        <li key={fruit.id}>
            {fruit.name} : <b>{fruit.calories}</b>
        </li>);

    return (<ol>{listItems}</ol>);
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayof(
        PropTypes.shape(
            {
                id: PropTypes.number,
                name: PropTypes.string,
                calories: PropTypes.number
            }
        )
    )

}

export default List