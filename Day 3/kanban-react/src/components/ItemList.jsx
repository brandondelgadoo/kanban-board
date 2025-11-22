
const ItemList = ({items, setItems}) => {
  
  const removeItem = (value) => {
    if (items.length > 0) {
      // props.setItems(props.items.slice(0, -1))
      setItems(items.filter((item) => item != value))
    }
  }

  return (
    <ul>
      {items.map((value, idx) => (
        <li key={idx}>
          {value}
          <button onClick={() => removeItem(value)}>X</button>
        </li>
      ))}
    </ul>
  )
}

export { ItemList }