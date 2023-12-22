import useCounter from "./useCounter"
function Counter() {
const [num,increment,descrement,reset]=useCounter()
  return (
    <div>
      <h2>Sayi={num}</h2>
      <button onClick={increment}>Artir</button>
      <button onClick={descrement}>Azalt</button>
      <button onClick={reset}>Sifirla</button>
    </div>
  )
}

export default Counter