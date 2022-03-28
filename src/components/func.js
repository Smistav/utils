import React from 'react'

function Func() {
  const [count, setCount] = React.useState(1)
  const [items, setItems] = React.useState([{ id: 1 }])

  React.useEffect(() => {
    const intId = setInterval(() => console.log(count), 2000)
    document.addEventListener('click', () => intId)
    return () => {
      document.removeEventListener('click', clearInterval(intId))
    }
  }, [count])
  const click = React.useCallback(() => {
    setCount((prev) => prev + 1)
    setItems([...items, { id: count + 1 }])
  }, [count, items])
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
      <button type='button' onClick={click}>
        Add one
      </button>
    </>
  )
}
export default Func
