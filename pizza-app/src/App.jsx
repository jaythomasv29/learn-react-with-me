import './App.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];




function Header() {
  return (
    <header className='header'>
      <h1>Castro Pizza Co</h1>
    </header>)
}


function Pizza({ name, ingredients, price, photoName, soldOut }) {


  return (<li className={`pizza ${soldOut ? "sold-out" : ""}`}>
    <img src={photoName} alt={`pizza${name}`} />
    <div>
      <h3>{name}</h3>
      <p>{ingredients}</p>

      {
          <span>{soldOut ? "SOLD OUT" : price}</span>
      }
    </div>
  </li>)
}


function Order({ openHour, closeHour }) {
  return (<>
    <footer className='footer'>{new Date().toLocaleTimeString()} We're Open~! We're open between {openHour}:00PM - {closeHour}:00PM</footer>
  </>)
}


function Menu() {
  const pizzas = pizzaData
  // const pizzas = [];
  const numsPizzas = pizzas.length;
  return <main className='menu'>
    <h2>Our Menu</h2>
    {numsPizzas > 0 &&
      <p>Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious</p>
    }

    <ul className='pizzas'>
      {
        numsPizzas > 0 ?
          pizzas.map((pizza, idx) => {
            return <Pizza key={idx}{...pizza} />
          }) :
          <h1>Uh oh...we have no pizzas : (</h1>
      }
    </ul>
  </main>
}

function Footer(props) {
  const hour = new Date().getHours();
  const openHour = 12 // Noon
  const closeHour = 22 // 10pm
  const isOpen = hour >= openHour && hour < closeHour
  return isOpen ? <Order openHour={openHour} closeHour={closeHour} /> :
    <footer className='footer'>{new Date().toLocaleTimeString()} We're currently closed, Open daily from {openHour}pm - {closeHour - 12} pm</footer>
}
function App() {


  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

export default App
