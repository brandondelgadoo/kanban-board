import { useState } from 'react'
import './styles.css'

export default function App() {
  const [item, setItem] = useState("")
  const [list, setList] = useState(["Soup", "Chicken", "Eggs"])

  const addItem = () => {
    if (item) {
      setList([...list, item])
    setItem("")
    }
    
  }

  const removeItem = () => {
    if (list.length > 0) {
      setList(list.slice(0, -1))
    }
  }

  return (
    <div>
      <div class="grocery-list">
        <h2>My Grocery List</h2>
        <ul id="list">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div class="btn">
        <button onClick={removeItem}>Remove</button>
        <div id="input">
          <input value={item} onChange={(event) => setItem(event.target.value)} />
          <button onClick={addItem}>Add task</button>
        </div>
      </div>
    </div>
  )
}
